import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Lottie from 'lottie-react'
import new1 from "./elearn.json"
import Testimonials from "../../components/testimonials/Testimonials";


const Home = () => {


  const navigate = useNavigate();
  
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <div className="h1con">

          <h1>Welcome to E-BATU</h1>
          </div>

          <p>Welcome to E-BATU, the eLearning platform of our University Our mission 
            is to enhance the learning experience for students and faculty by providing
             a seamless and interactive digital environment. We are dedicated to providing
              high quality online courses to help individuals learn and grow in their desired 
              fields. Our experienced instruction ensure that each course is tailored for effective 
              learning and practical application.</p>
          <div className="pcon">
          </div>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
        <div className="homegif">
          <div>  <div className='gifcon'>
                {/* <Lottie animationData={homeGIF} className='gif'/> */}
                <Lottie animationData={new1} className='gif' loop={true}/>
              {/* <Lottie options={GIF1}/> */}
              {/* <Lottie options={defaultOptions} className="gif"/> */}
             </div>
             </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
