import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useLocation } from "react-router-dom";

const LOGIN_URL = "/api/user/login";
function LogEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, []);

  const loginEmail = async (e) => {
    e.preventDefault();
    console.log(location.state);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${location.state.token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-10/12 mx-auto pt-10 mb-20">
      <div className="text-3xl font-bold"> Welcome back!</div>
      <p className="my-3 text-slate-600">Log into your account</p>
      <form action="">
        <label htmlFor="text"> Email </label> <br />
        <input
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline outline-slate-600 rounded-lg p-2 w-full my-2"
        />
        <label htmlFor="text"> Password </label> <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
        />
      </form>
      <div className="mt-5">
        Don't have an account? &nbsp;
        <span className="text-blue-700 font-semibold">
          <Link to="/">Sign Up</Link>
        </span>
      </div>
      <div className="my-2">
        Forgot Password? &nbsp;
        <span className="text-blue-700 font-semibold">
          <Link to="/reset">Click here</Link>
        </span>
      </div>

      <button
        onClick={loginEmail}
        className="w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2"
      >
        <p>Next</p>
      </button>
    </div>
  );
}

export default LogEmail;
