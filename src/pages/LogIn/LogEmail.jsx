import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import AuthContext from "../../context/Authprovider";

function LogEmail() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const emailRef = useRef();
  const errRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/user/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
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
          className="outline outline-slate-600 rounded-lg p-2 w-full my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
          ref={emailRef}
        />
        <label htmlFor="text"> Password </label> <br />
        <input
          type="password"
          placeholder="Enter your password"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </form>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

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
        onClick={handleLogin}
        className="w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2"
      >
        <p>Next</p>
      </button>
    </div>
  );
}

export default LogEmail;
