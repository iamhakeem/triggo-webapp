import React from "react";

function Currency() {
  return (
    <>
      <nav className='flex items-center justify-between w-11/12 m-auto pt-5'>
        <ul className='nav-menu h-[50vh] active pt-8 p-3 bg-slate-50 rounded-t-3xl'>
          <div className='w-20 h-2 bg-slate-400 mx-auto mb-5 rounded-md' />
          <div className='font-bold text-2xl mb-5'>Select Currency</div>
          <li className='inline-block mb-3 rounded-lg p-2 outline outline-slate-200 hover:bg-[#CCF8E8]'>
            Nigerian Naira (NGN)
          </li>
          <li className='inline-block mb-3 rounded-lg p-2 outline outline-slate-200 hover:bg-[#CCF8E8]'>
            United States Dollar (USD)
          </li>
          <li className='inline-block mb-3 rounded-lg p-2 outline outline-slate-200 hover:bg-[#CCF8E8]'>
            Great British Pounds (GBP)
          </li>
          <li className='inline-block mb-3 rounded-lg p-2 outline outline-slate-200 hover:bg-[#CCF8E8]'>
            Euro (EUR)
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Currency;
