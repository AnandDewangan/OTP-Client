import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./Styles/OTPVerification.css";
import logo from "./Assets/Otp_verify_logo.png";

function OTPVerificationScreen() {
  const [enteredOTP, setEnteredOTP] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mobileNumber = queryParams.get("mobileNumber");

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("https://otp-server-k8on.vercel.app/verifyOTP", {
        mobileNumber,
        enteredOTP,
      });
      if (response.data.success) {
        navigate("/success");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="topSection">
          <img src={logo} alt="OTP Logo" width="100%" height="100%" />
        </div>
        <div className="secondTopSection">
          <div style={{ fontSize: "20px", color: "#333333" }}>
            Please verify Mobile number
          </div>
        </div>
        <div className="lastTopSection">
          <div>
            <span style={{ color: "#666666", fontSize: "16px" }}>
              An OTP is sent to{" "}
            </span>
            <span style={{ color: "#333333", fontSize: "16px" }}>
              {mobileNumber}
            </span>
          </div>
          <div
            style={{
              color: "#F7B348",
              fontSize: "12px",
              marginTop: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Change Phone Number
          </div>
        </div>
        <div className="middleSection">
          <div className="otp-inputs">
            <input
              type="text"
              placeholder="Enter OTP"
              value={enteredOTP}
              onChange={(e) => setEnteredOTP(e.target.value)}
            />
          </div>
        </div>
        <div className="secondLastSection">
          <div style={{ color: "#999999", fontSize: "16px" }}>
            Didn't receive the code?
          </div>
        </div>
        <div
          style={{
            color: "#F7B348",
            fontSize: "16px",
            position: "absolute",
            bottom: "182px",
            right: "56px",
          }}
        >
          Resend
        </div>
        <div className="lastSection">
          <div
            style={{
              background: "#F7B348",
              borderRadius: "100px",
              width: "224px",
              height: "36px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "white",
                textAlign: "center",
                paddingTop: "9px",
              }}
              onClick={handleVerifyOTP}
            >
              Verify
            </div>
            {error && (
              <p
                className="error"
                style={{ color: "red", fontSize: "13px", marginTop: "2rem" }}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPVerificationScreen;
