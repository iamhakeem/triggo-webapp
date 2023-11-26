import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import eye from "../../assets/eye-slash.png";
import ellipse from "../../assets/ellipse.png";
import fly from "../../assets/fly.png";
import Plus from "../../assets/Plus.png";
import arrow from "../../assets/arrow-left.png";
import LightBox from "../../components/Lightbox";
import Currency from "../../components/Currency";

function Dashboard() {
  const [click, setClick] = useState(false);
  const [addClick, setAddClick] = useState(false);
  const [accountClick, setAccountClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setAddClick(false);
    setAccountClick(false);
  };
  const handleAddClick = () => {
    setAddClick(!addClick);
    setClick(false);
    setAccountClick(false);
  };
  const handleAccountClick = () => {
    setAccountClick(!accountClick);
    setClick(false);
    setAddClick(false);
  };
  return (
    <div className='w-10/12 mx-auto pt-10 mb-20'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={avatar} alt='' />
          <p className='ml-2'>Hi, Jimmy</p>
        </div>
        <div
          className='w-fit p-2 outline outline-slate-200'
          onClick={handleClick}>
          NGN
        </div>
      </div>
      <div className='mt-5'>Account Balance</div>
      <div className='flex items-end'>
        <div
          className='text-lg mr-2 font-semibold'
          onClick={handleAccountClick}>
          N6,000,000.00<span className='text-slate-400 text-sm'>.00</span>
        </div>
        <img src={eye} alt='' />
      </div>
      <div className='flex my-5'>
        <div className='flex items-center mr-2'>
          <p className='mr-1' onClick={handleAddClick}>
            Add Money
          </p>
          <img src={Plus} alt='' />
        </div>
        <div className='flex items-center mr-2'>
          <p className='mr-1'>Send Money</p>
          <img src={fly} alt='' />
        </div>
        <img src={ellipse} alt='' />
      </div>
      <div className='flex bg-black items-center justify-between p-3 rounded-lg'>
        <div className='text-white w-10/12'>
          <div className='font-bold'>Complete your account setup</div>
          <p className='text-sm'>
            Make all transactions by completing your KYC
          </p>
        </div>
        <img src={arrow} alt='' />
      </div>
      <div className='text-slate-600 my-5 font-semibold'>Transactions</div>
      <div className='text-center w-4/5 m-auto mt-10'>
        You haven’t performed any transactions yet
      </div>
      <div className='flex fixed bottom-5 items-center justify-between'>
        <div className='w-28'>
          <NavLink
            to='/dashboard'
            className={({ isPending, isActive }) =>
              isPending ? "" : isActive ? "text-center text-[#00DC8A]" : ""
            }>
            Home
          </NavLink>
        </div>
        <div className='w-28'>
          <NavLink
            // to='/'
            className={({ isPending, isActive }) =>
              isPending ? "" : isActive ? "text-center text-[#00DC8A]" : ""
            }>
            P2P
          </NavLink>
        </div>
        <div className='w-28'>
          <NavLink
            to='/settings'
            className={({ isPending, isActive }) =>
              isPending ? "" : isActive ? "text-center text-[#00DC8A]" : ""
            }>
            Settings
          </NavLink>
        </div>
      </div>
      {click ? <Currency /> : ""}
      {addClick ? (
        <LightBox
          optOne='Bank Transfer'
          subOne='Receive money with you account number'
          optTwo='Card'
          subTwo='Fund wallet using a debit card'
          optThree='Thepeer'
          subThree='Fund your wallet with Thepeer'
          bank='Bank Transfer'
        />
      ) : (
        ""
      )}
      {accountClick ? (
        <LightBox
          optOne='Account details'
          subOne='View your account information'
          optTwo='Account Statement'
          subTwo='Generate a statement of your transactions'
          optThree='Exchange rates'
          subThree='Convert to another currency'
          bank='Account Details'
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
