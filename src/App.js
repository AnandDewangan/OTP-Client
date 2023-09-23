import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import MobileNumberScreen from './MobileNumberScreen';
import OTPVerificationScreen from './OTPVerificationScreen';
import SuccessScreen from './SuccessScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Switch> */}
        <Route path="/" element={<MobileNumberScreen/>} />
        <Route path="/otp-verification" element={<OTPVerificationScreen/>} />
        <Route path="/success" element={<SuccessScreen/>} />
      {/* </Switch> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
