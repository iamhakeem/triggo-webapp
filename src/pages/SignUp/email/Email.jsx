import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./email.css";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/api/user/signup";

function Email() {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  //the email
  const [email, setEmail] = useState("");
  //check if email is invalid to display error message
  const [validEmail, setValidEmail] = useState(false);
  //check if the email field is focused
  const [emailFocus, setEmailFocus] = useState(false);
  const [errMessage, setErrMessage] = useState("mmm");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSucessMessage] = useState("");

  //focus on the email field when page loads
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  //check the entered email against the REGEX
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);

    setValidEmail(result);
  }, [email]);

  //clear the error Message anytime the email input changes
  useEffect(() => {
    setErrMessage("");
  }, [email]);

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    if (!v1) {
      setErrMessage("Invalid Entry");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("here");
      navigate("/verify", {
        state: { email, otpCode: response.data.data.token },
      });
      setLoading(false);
      setEmail("");

      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
    } catch (error) {
      if (!error?.response) {
        setErrMessage("No Server Response");
      } else if (error.response?.status === 409) {
        setErrMessage("Email Taken");
      } else {
        setErrMessage("Registration Failed");
      }
      errRef.current.focus();
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="w-10/12 mx-auto pt-20">
      <div className="text-3xl font-bold"> Enter your email address </div>
      <p className="my-3 text-slate-600">
        Your email address will be used to verify your account.
      </p>
      <form onSubmit={onSubmitEmail}>
        <label htmlFor="email">
          Email Address:{" "}
          <span className={validEmail ? " valid " : "hide"}>
            <FaCheck className="email_icon_check" />
          </span>
          <span
            className={validEmail || !email ? "hide email_icon" : "invalid"}
          >
            <FaTimes className="email_icon_times" />
          </span>
        </label>
        <br />
        <input
          type="email"
          placeholder="Enter your email address"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email_address"
          ref={emailRef}
          autoComplete="off"
          aria-describedby="emailidnote"
          aria-invalid={validEmail ? "false" : "true"}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          id="emailidnote"
          className={
            emailFocus && email && !validEmail
              ? "instructions flex items-center gap-1"
              : "offscreen"
          }
        >
          <FaInfoCircle />
          It must contain only lowercase letters, numbers, and special
          characters like . _ % + <br />
        </p>
      </form>
      <div className="font-semibold mt-3">
        Already a user?{" "}
        <span className="text-blue-700">
          <Link to="login">Log in</Link>
        </span>
      </div>
      <p
        ref={errRef}
        className={errMessage ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMessage}
      </p>
      <button
        onClick={onSubmitEmail}
        type="button"
        disabled={!validEmail || !email ? true : false}
        className=" w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 absolute bottom-0 "
      >
        Next
      </button>

      {loading && <h1>Loadingggggg</h1>}
      <h1>{successMessage}</h1>
    </div>
  );
}

export default Email;
