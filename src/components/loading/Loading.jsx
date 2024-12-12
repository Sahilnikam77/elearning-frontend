import React from "react";
import "./loading.css";
import Lottie from 'lottie-react'
import new1 from "./loadergif.json"
const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loader">
      <Lottie animationData={new1} className='gif1' loop={true}/>
      </div>
    </div>
  );
};

export default Loading;
