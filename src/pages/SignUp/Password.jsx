import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Password() {
  return (
    <div className='w-10/12 mx-auto pt-20 mb-20'>
      <Back />
      <div className='text-3xl font-bold'> Create a password</div>
      <p className='my-3 text-slate-600'>
        This will be required for subsequent login on new devices
      </p>
      <form action=''>
        <label htmlFor='text'> Password </label> <br />
        <input
          type='text'
          placeholder='Create a secure combination'
          className='outline outline-slate-600 rounded-lg p-2 w-full my-2'
        />
        <p className='text-slate-600 text-sm mb-4'>
          Minimum 8 alphanumeric and special characters
        </p>
        <label htmlFor='text'> Confirm password </label> <br />
        <input
          type='text'
          placeholder='Enter password again'
          className='outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-10'
        />
      </form>

      <Link to='/accCreate'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Password;
