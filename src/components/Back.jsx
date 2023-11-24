import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from '../../src/assets/ArrowLeft.png'

function Back() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className='text-lg'>
      <img src={Arrow} alt="Go back" />
    </button>
  );
}

export default Back;
