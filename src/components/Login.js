import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {auth} from '../utils/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/114769505?v=4"
            }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
            }).catch((error) => {
              setErrorMessage(error.message);
            });
        })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-login' />
      </div>

      
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={(e)=> e.preventDefault()}
          className="relative p-12 bg-black w-3/12 text-center text-white rounded-lg bg-opacity-80">
          
          <h1
            className='font-bold text-3xl z-10 mb-4 text-left'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />
          
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />
          <p className='text-red-600 font-bold text-lg mt-2'>{errorMessage}</p>
          <button
            className='p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className='py-2 text-left cursor-pointer'
            onClick={toggleSignInForm}
          >{isSignInForm ? "New to Netfix? Sign Up Now..." : "Already Registered! Sign In"}</p>

        </form>
      </div>

    </div>
  );
};

export default Login;