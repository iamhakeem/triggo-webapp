import React from "react";
import { Link } from "react-router-dom";

function Email() {
  return (
    <div className='w-10/12 mx-auto pt-20'>
      <div className='text-3xl font-bold'> Enter your email address </div>
      <p className='my-3 text-slate-600'>
        Your email address will be used to verify your account.
      </p>
      <form action=''>
        <label htmlFor='email'> Email Address </label> <br />
        <input
          type='email'
          placeholder='Enter your email address'
          className='outline outline-slate-600 rounded-lg p-2 w-full mt-2'
        />
      </form>
      <div className='font-semibold mt-3'>
        Already a user?{" "}
        <span className='text-blue-700'>
          <Link to='login'>Log in</Link>
        </span>
      </div>
      <Link to='/verify'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 absolute bottom-0'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Email;
