import React from 'react';
import "./Styles/SuccessScreen.css";

function SuccessScreen() {
  return (
    <>
      <div className="container">
        <div className="first_section">
        </div>
        <div className="second_section">
        <div>Welcome to AdmitKard</div>
        </div>
        <div className="third_section">
        <div style={{textAlign: 'center'}}><span style={{fontSize: '16px', color: '#999999'}}>In order to provide you with <br/>a custom experience,<br/></span><span style={{fontSize: '16px', color: '#666666'}}>we need to ask you a few questions.</span></div>
        </div>
        <div className="fourth_section">
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
            >
             Get Started
            </div>
            </div>
        </div>
        <div className="fifth_section">
        <div style={{fontSize: "12px", color: "#999999"}}>*This will only take 5 min.</div>
        </div>
      </div>
    </>
  );
}

export default SuccessScreen;
