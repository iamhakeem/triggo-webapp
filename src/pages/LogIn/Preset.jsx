import React from "react";
import Back from "../../components/Back";

function Preset() {
  return (
    <div className='w-10/12 mx-auto pt-20'>
      <Back />
      <div className='text-3xl font-bold'> Reset password </div>
      <p className='my-3 text-slate-600'>
        Please enter the OTP sent to your email johndoe@example.com below to
        autheniticate
      </p>
      <form action='' className='flex justify-between'>
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
      </form>
      <div className='font-semibold mt-3'>
        Send code in <span className='text-blue-700'>5:00</span>
      </div>
    </div>
  );
}

export default Preset;
