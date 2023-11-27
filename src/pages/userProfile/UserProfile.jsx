import React, { useState, useEffect, useRef } from "react";
import { Link, redirect } from "react-router-dom";
import Back from "../../components/Back";
import "../SignUp/email/email.css";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const USER_URL = "/api/user/";

export const getToken = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return null; // Not running in a browser environment
  }

  if (!window.localStorage.getItem("token")) {
    return null; // "token" item does not exist
  }

  return window.localStorage.getItem("token");
};

function Password() {
  const errRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [tag, setTag] = useState("");
  const [bvn, setBvn] = useState("");
  const [token, setToken] = useState("");

  const [invalidTimeout, setInvalidTimeout] = useState("");

  const [errMsg, setErrMessage] = useState(false);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    if (!location?.state?.token) {
      navigate("/");
    }
    setToken(location?.state?.token);
  }, [location]);

  const handleProfile = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(pwd);

    if (!v1) {
      setErrMessage("Invalid Entry");
    }

    if (
      validPwd &&
      validMatch &&
      firstName &&
      lastName &&
      dateOfBirth &&
      country &&
      state &&
      address &&
      bvn &&
      tag
    ) {
      try {
        const response = await axios.post(
          USER_URL,
          JSON.stringify({
            password: pwd,
            firstName,
            lastName,
            dateOfBirth,
            nationality: country,
            state,
            address,
            bvn,
            tag,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        getToken();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-10/12 mx-auto pt-20 mb-20">
      <Back />
      <div className="text-3xl font-bold"> Create a password</div>
      <p className="my-3 text-slate-600">
        This will be required for subsequent login on new devices
      </p>
      <form>
        {/* PASSWORD */}
        <label htmlFor="text">
          {" "}
          Password{" "}
          <span className={validPwd ? "valid" : "hide"}>
            <FaCheck className="email_icon_check" />
          </span>
          <span className={validPwd || !pwd ? "hide email_icon" : "invalid"}>
            <FaTimes className="email_icon_times" />
          </span>
        </label>{" "}
        <br />
        <input
          type="password"
          id="password"
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          placeholder="Create a secure combination"
          className="outline outline-slate-600 rounded-lg p-2 w-full my-2"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <p
          id="pwdnote"
          className={
            pwdFocus && !validPwd
              ? "instructions text-slate-600 text-sm mb-4"
              : "offscreen"
          }
        >
          <FaInfoCircle />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
        {/* CONFIRM PASSWORD */}
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "hide"}>
            <FaCheck className="email_icon_check" />
          </span>
          <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <FaTimes className="email_icon_times" />
          </span>
        </label>
        <input
          type="password"
          placeholder="Enter password again"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-10"
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          <FaInfoCircle />
          Must match the first password input field.
        </p>
        {/* FIRST NAME */}
        <label htmlFor="text"> First Name </label> <br />
        <input
          type="text"
          placeholder="Enter your first name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-4"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* LAST NAME */}
        <label htmlFor="text"> Last Name </label> <br />
        <input
          type="text"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* DATE OF BIRTH */}
        <label htmlFor="text"> Date Of Birth </label> <br />
        <input
          type="date"
          placeholder="Enter your last name"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
          value={dateOfBirth}
          onChange={(e) => setdateOfBirth(e.target.value)}
        />
        {/* COUNTRY */}
        <label htmlFor="text"> Country </label> <br />
        <select
          name="country"
          id="country"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2 mb-3"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="Nigeria">Nigeria</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Kenya">Kenya</option>
          <option value="Ghana">Ghana</option>
        </select>
        {/* STATE */}
        <label htmlFor="text"> State </label> <br />
        <input
          type="text"
          placeholder="Enter your state"
          className="outline outline-slate-600 rounded-lg p-2 w-full mt-2"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {/* ADDRESS */}
        <label htmlFor="text"> Address </label> <br />
        <textarea
          type="text"
          placeholder="Enter your address example: No. 55 Edu Street, Lagos, State"
          className="outline outline-slate-600 rounded-lg p-2 w-full h-32 mt-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* TAG */}
        <label htmlFor="text"> Triggo tag </label> <br />
        <input
          type="text"
          placeholder="@Enter a suitable name i.e charlieboy"
          className="outline outline-slate-600 rounded-lg p-2 w-full my-2"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        {/* BVN */}
        <label htmlFor="text"> BVN </label> <br />
        <input
          type="number"
          placeholder="Enter your BVN"
          className="outline outline-slate-600 rounded-lg p-2 w-full my-2"
          value={bvn}
          onChange={(e) => setBvn(e.target.value)}
        />
      </form>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <button
        disabled={!validPwd || !validMatch ? true : false}
        onClick={handleProfile}
        className="w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2"
      >
        <p>Next</p>
      </button>
    </div>
  );
}

export default Password;
