import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
      navigate("/error");
    });
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
      {user &&
        (<div className='p-2'>
        <img
          className='w-12 h-12 m-auto'
          alt='usericon'
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className='font-bold text-xl text-red-700'>
          Sign Out
        </button>
      </div>)}
    </div>
  )
};

export default Header;