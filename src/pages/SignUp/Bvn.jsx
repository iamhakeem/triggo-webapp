import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Bvn() {
  return (
    <div className='w-10/12 mx-auto pt-20 mb-20'>
      <Back />
      <div className='text-3xl font-bold'> What's your BVN </div>
      <p className='my-3 text-slate-600'>
      By law, your BVN is required to validate your Identity as a Triggo customer
      </p>
      <form action=''>
        <label htmlFor='text'> BVN </label> <br />
        <input
          type='text'
          placeholder='Enter your BVN'
          className='outline outline-slate-600 rounded-lg p-2 w-full my-2'
        />
      </form>
      <p className="text-slate-600">Your BVN is a 11 digit number from your local bank</p>

      <Link to='/password'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Bvn;
