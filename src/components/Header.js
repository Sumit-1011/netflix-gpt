import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
      navigate("/error");
    });
  } 

  const handleGptSearch = () => {
    //Toggle Gpt Search View
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              //Sign In/Up
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              navigate("/browse");
          } else {
              dispatch(removeUser());
              navigate("/");
          }
      });

      //unsubscribe when component changes
      return () => unsubscribe(); 
  }, []); 

  return (
  <div className="absolute w-screen px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
  <img
    className="w-48"
    src={LOGO}
    alt='logo'
  />
  {user && (
    <div className="flex items-center"> {/* Use flex to align items horizontally */}
        <div className='flex p-2'>
            { showGptSearch && (<select
              className='p-2 m-2 bg-gray-900 text-white'
              onChange={handleLanguageChange}>
              {SUPPORTED_LANG.map(lang => <option
                key={lang.identifier}
                value={lang.identifier}>
                {lang.name}
              </option>
              )}
            </select>)}
        </div>
          <div>
            <button
              className='py-2 px-2 bg-yellow-400 text-black mr-6 rounded-lg text-lg font-semibold'
              onClick={handleGptSearch}
            >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
        </div>
      <div className='p-4'>
        <img
          className='w-12 h-12 m-auto rounded-xl'
          alt='usericon'
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className='font-bold text-xl text-red-700'>
          Sign Out
        </button>
      </div>
      
    </div>
  )}
</div>
);

};

export default Header;