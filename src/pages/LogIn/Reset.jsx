import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Reset() {
  return (
    <div className='w-10/12 mx-auto pt-20 mb-20'>
      <Back />
      <div className='text-3xl font-bold'> Reset password</div>
      <p className='my-3 text-slate-600'>
        Provide your registered email address ro recieve authorization
      </p>
      <form action=''>
        <label htmlFor='text'> Email </label> <br />
        <input
          type='email'
          placeholder='johndoe@example.com'
          className='outline outline-slate-600 rounded-lg p-2 w-full my-2'
        />
      </form>
      <div className='font-semibold my-3'>
        Don't have an account? &nbsp;
        <span className='text-blue-700'>
          <Link to='/'>Sign Up</Link>
        </span>
      </div>

      <Link to='/preset'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Reset;
