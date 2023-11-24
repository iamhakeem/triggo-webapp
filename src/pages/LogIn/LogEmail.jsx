import React from "react";
import { Link } from "react-router-dom";

function LogEmail() {
  return (
    <div className='w-10/12 mx-auto pt-10 mb-20'>
      <div className='text-3xl font-bold'> Welcome back!</div>
      <p className='my-3 text-slate-600'>Log into your account</p>
      <form action=''>
        <label htmlFor='text'> Email </label> <br />
        <input
          type='email'
          placeholder='johndoe@example.com'
          className='outline outline-slate-600 rounded-lg p-2 w-full my-2'
        />
        <label htmlFor='text'> Password </label> <br />
        <input
          type='text'
          placeholder='Enter your password'
          className='outline outline-slate-600 rounded-lg p-2 w-full mt-2'
        />
      </form>
      <div className='mt-5'>
        Don't have an account? &nbsp;
        <span className='text-blue-700 font-semibold'>
          <Link to='/'>Sign Up</Link>
        </span>
      </div>
      <div className='my-2'>
        Forgot Password? &nbsp;
        <span className='text-blue-700 font-semibold'>
          <Link to='/reset'>Click here</Link>
        </span>
      </div>

      <Link to='/login'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default LogEmail;
