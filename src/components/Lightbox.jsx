import React, { useState } from "react";
import card from "../assets/card.png";
import peer from "../assets/peer.png";
import money from "../assets/money.png";

function LightBox({
  optOne,
  subOne,
  optTwo,
  subTwo,
  optThree,
  subThree,
  bank,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className='flex items-center justify-between w-11/12 m-auto pt-5'>
        <ul className='nav-menu h-[50vh] active pt-8 p-3 bg-slate-50 rounded-t-3xl'>
          <div className='w-14 h-2 bg-slate-400 mx-auto mb-5 rounded-md' />
          <div className='w-11/12 m-auto'>
            <div className='flex items-center mb-3 text-left rounded-lg p-5 outline outline-slate-200 hover:bg-[#CCF8E8]'>
              <img src={money} alt='wallet' />
              <div className='ml-4' onClick={handleClick}>
                <li className='font-bold'>{optOne}</li>
                <li className='text-sm'>{subOne}</li>
              </div>
            </div>
            <div className='flex items-center mb-3 text-left rounded-lg p-5 outline outline-slate-200 hover:bg-[#CCF8E8]'>
              <img src={card} alt='wallet' />
              <div className='ml-4'>
                <li className='font-bold'>{optTwo}</li>
                <li className='text-sm'>{subTwo}</li>
              </div>
            </div>
            <div className='flex items-center mb-3 text-left rounded-lg p-5 outline outline-slate-200 hover:bg-[#CCF8E8]'>
              <img src={peer} alt='wallet' />
              <div className='ml-4'>
                <li className='font-bold'>{optThree}</li>
                <li className='text-sm'>{subThree}</li>
              </div>
            </div>
          </div>
        </ul>
      </nav>
      {click ? (
        <nav className='flex items-center justify-between w-11/12 m-auto pt-5'>
          <ul className='nav-menu h-[70vh] active pt-8 p-3 bg-slate-50 rounded-t-3xl'>
            <div
              className='w-14 h-2 bg-slate-400 mx-auto mb-5 rounded-md'
              onClick={handleClick}
            />
            <div className='text-left w-11/12 mx-auto'>
              <div className='font-bold'>{bank}</div>
              <div className='my-2 text-sm'>
                Use the details below to receive money into your Triggo wallet
              </div>
              <div className='p-4 bg-slate-300 rounded-xl mt-5'>
                <div className='font-bold'>Bank</div>
                <div className='mb-5'>Providus</div>
                <div className='font-bold'>Account Number</div>
                <div className='mb-5'>1234567890</div>
                <div className='font-bold'>Account Name</div>
                <div className='mb-5'>John Doe</div>
              </div>
            </div>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default LightBox;
