import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Address() {
  return (
    <div className='w-10/12 mx-auto pt-20 mb-20'>
      <Back />
      <div className='text-3xl font-bold'> Your home address </div>
      <p className='my-3 text-slate-600'>
        Home address is important to validate your KYC
      </p>
      <form action=''>
        <label htmlFor='text'> Country </label> <br />
        <select
          name='country'
          id='country'
          className='outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-3'>
          <option value='Nigeria'>Nigeria</option>
          <option value='United States'>United States</option>
          <option value='United Kingdom'>United Kingdom</option>
          <option value='Kenya'>Kenya</option>
          <option value='Ghana'>Ghana</option>
        </select>
        <label htmlFor='text'> Address </label> <br />
        <textarea
          type='text'
          placeholder='Enter your address example: No. 55 Edu Street, Lagos, State'
          className='outline outline-slate-600 rounded-lg p-2 w-full h-32 mt-2'
        />
      </form>

      <Link to='/tag'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Address;
