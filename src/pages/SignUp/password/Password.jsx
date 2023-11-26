import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Back from "../../../components/Back";
import "./password.css";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Password() {
  const errRef = useRef();

  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [invalidTimeout, setInvalidTimeout] = useState("");

  const [errMsg, setErrMessage] = useState(false);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handlePassword = (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(pwd);

    if (!v1) {
      invalidTimeout = setTimeout(() => {
        setErrMessage("Invalid Entry");
      });
    }

    if (validPwd && validMatch) {
      navigate("/accCreate");
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
      </form>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <Link to="/accCreate">
        <button
          disabled={!validPwd || !validMatch ? true : false}
          onClick={handlePassword}
          className="w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2"
        >
          <p>Next</p>
        </button>
      </Link>
    </div>
  );
}

export default Password;
