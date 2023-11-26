import React, { useState } from "react";
import Back from "../../components/Back";
import avatar from "../../assets/avatar.png";
import arrowdown from "../../assets/arrowdown.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

function Settings() {
  const [clickOne, setClickOne] = useState(false);
  const handleClick = () => {
    setClickOne(!clickOne);
  };
  const [clickTwo, setClickTwo] = useState(false);
  const handleClickTwo = () => {
    setClickTwo(!clickTwo);
  };
  const [clickThree, setClickThree] = useState(false);
  const handleClickThree = () => {
    setClickThree(!clickThree);
  };
  return (
    <div className='w-10/12 mx-auto pt-20'>
      <Back />
      <div className='text-center'>
        <img src={avatar} alt='' className='mx-auto w-14' />
        <p className='mt-2'>John Doe</p>
        <p className='mb-5'>@johndoe</p>
        <Link
          to='/'
          className='outline outline-slate-300 rounded-full mx-auto my-4 py-2 px-10'>
          Edit profile
        </Link>
      </div>
      <div className='my-10 font-semibold'>
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClick}>
          <p>Account</p>
          {clickOne ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickOne ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Account Information</p>
            <p className='p-2 rounded-lg mb-5'>Account Verification</p>
            <p className='p-2 rounded-lg mb-5'>Beneficiaries</p>
            <p className='p-2 rounded-lg mb-5'>Notification</p>
            <p className='p-2 rounded-lg mb-5'>Referrals</p>
          </div>
        ) : (
          ""
        )}
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClickTwo}>
          <p>Security</p>
          {clickTwo ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickTwo ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Change Password</p>
            <p className='p-2 rounded-lg my-5'>Change PIN</p>
            <p className='p-2 rounded-lg my-5'>Two-factor Authentication</p>
            <p className='p-2 rounded-lg my-5'>Enable Biometrics</p>
          </div>
        ) : (
          ""
        )}
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClickThree}>
          <p>Others</p>
          {clickThree ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickThree ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Privacy Policy</p>
            <p className='p-2 rounded-lg my-5'>Terms and Conditions</p>
            <p className='p-2 rounded-lg my-5'>Support</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Settings;
