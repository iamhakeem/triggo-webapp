import React from "react";
import Back from "../../components/Back";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

function Verify() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [resToken, setResToken] = useState("");

  useEffect(() => {
    if (!location?.state?.token) {
      navigate("/");
    }
    setEmail(location.state?.email);
    setResToken(location.state?.token);

    console.log(resToken);
  }, [location]);

  const handleTokenSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/user/verify-account",
        JSON.stringify({ email, otpCode: token }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      if (response.data.status === 200) {
        navigate("/user", { state: { token: resToken } });
      }

      setToken("");
      console.log(response);
    } catch (error) {
      setToken("");
      console.log("Error", error);
    }
  };
  return (
    <div className="w-10/12 mx-auto pt-20">
      <Back />
      <div className="text-3xl font-bold"> Verify your account </div>
      <p className="my-3 text-slate-600">
        We sent you 6 digit code to {email ? email : "johndoe@example.com"}
      </p>
      <form className="flex justify-between">
        <input
          type="number"
          className="outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center"
          placeholder="000000"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="button" onClick={handleTokenSubmit}>
          Submit
        </button>
      </form>
      <div className="font-semibold mt-3">
        Send code in <span className="text-blue-700">5:00</span>
      </div>
    </div>
  );
}

export default Verify;
