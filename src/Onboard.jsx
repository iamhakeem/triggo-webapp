import React from "react";
import onbo from "../assets/onbo.png";
import { Link } from "react-router-dom";

function Onboard() {
  return (
    <div className='bg-[#0B1D16] pb-12'>
      <div className='w-10/12 mx-auto'>
        <img src={onbo} alt='' className='pt-10 h-96' />
        <div className='font-bold text-5xl text-white text-center py-10'>
          Send, receive and swap money
        </div>
        <Link to='/email'>
          <div className='bg-[#00DC8A] rounded-full w-full py-5 font-bold text-xl text-center'>
            Get Started
          </div>
        </Link>
        <Link to='/login'>
          <div className='bg-white my-2 rounded-full w-full py-5 font-bold text-xl text-center'>
            Login
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Onboard;
