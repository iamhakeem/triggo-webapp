import React from "react";
import { Link } from "react-router-dom";
import Back from "../../components/Back";

function Name() {
  return (
    <div className="w-10/12 mx-auto pt-20">
      <Back />
      <div className="text-3xl font-bold"> What's your name </div>
      <p className="my-3 text-slate-600">
        Your official name is important to create an account
      </p>
      <form action="">
        <label htmlFor="text"> First Name </label> <br />
        <input
          type="text"
          placeholder="Enter your first name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-4"
        />
        <label htmlFor="text"> Last Name </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
        <label htmlFor="text"> Nationality </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
        <label htmlFor="text"> Date Of Birth </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
        <label htmlFor="text"> Country </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
        <label htmlFor="text"> State </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
      </form>

      <Link to="/address">
        <div className="w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 absolute bottom-0">
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Name;
