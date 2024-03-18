import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

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
          className="relative p-12 bg-black w-3/12 text-center text-white rounded-lg bg-opacity-80">
          
          <h1
            className='font-bold text-3xl z-10 mb-4 text-left'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && <input type="text" placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />}

          <input type="text" placeholder="Email Address"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />
          
          <input type="password" placeholder="Password"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-85" />
          
          <button
            className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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