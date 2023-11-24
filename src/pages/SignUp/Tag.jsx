import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Tag() {
  return (
    <div className='w-10/12 mx-auto pt-20 mb-20'>
      <Back />
      <div className='text-3xl font-bold'> Create a triggo tag </div>
      <p className='my-3 text-slate-600'>
        With triggo tag you can send and receive money without bank account
      </p>
      <form action=''>
        <label htmlFor='text'> Triggo tag </label> <br />
        <input
          type='text'
          placeholder='@Enter a suitable name i.e charlieboy'
          className='outline outline-slate-600 rounded-lg p-2 w-full my-2'
        />
      </form>
      <p className="text-slate-600">triggo.app/charlieboy</p>

      <Link to='/bvn'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Tag;
