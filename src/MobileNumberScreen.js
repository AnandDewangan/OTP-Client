import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Styles/MobileNumber.css";
import logo from "./Assets/admitkart_logo.png";
import flag from "./Assets/indian_flag.png";

function MobileNumberScreen() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      // Send a POST request to the backend to generate OTP
      const response = await axios.post("https://otp-server-k8on.vercel.app/generateOTP", {
        countryCode,
        mobileNumber,
      });
      // console.log(response.data.success);

      if (response.data.success) {
        // Redirect to OTP Verification Screen with mobile number
        // history.push(`/otp-verification?mobileNumber=${mobileNumber}`);
        navigate(`/otp-verification?mobileNumber=${mobileNumber}`);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="top_Section">
          <img src={logo} alt="AdmitKart logo" />
        </div>
        <div className="middle_Section">
          <div style={{ fontSize: "24px", position: "absolute", top: "317px", left: "101px"}}>Welcome Back</div>
          <div style={{ color: "#666666", fontSize: "16px", position: "absolute", top: "365px", left: "70px" }}>
            Please sign in to your account
          </div>
        </div>
        <div className="main_Section">
          <div className="enter">Enter Contact Number</div>
          <div>
            <img
              src={flag}
              alt="Indian Flag"
              style={{ width: "21px", height: "13px" }}
            />
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">+91 (IN)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="last_Section">
          <div>
            We will send you a one time SMS message.
            <br />
            Charges may apply.
          </div>
        </div>
        <div className="footer_Section">
          <div style={{background: "#F7B348", borderRadius: "100px", width: "224px", height: "36px"}}>
            <div style={{fontSize: "16px", color: "white", textAlign: "center", paddingTop: "9px"}} onClick={handleSendOTP}>Sign In with OTP</div>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNumberScreen;
