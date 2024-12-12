import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    
    <header>
      <div className="mainheader">

      {/* <div className="logo">E-Learning</div> */}
      <div className="ebatulogo"><img className="imglogo" src="imgEBATU\Untitled_design__5_-removebg.png" alt="" /></div>
      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
          
        )}
        
      </div>
        </div>
    </header>
  );
};

export default Header;
