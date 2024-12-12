import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import Lottie from 'lottie-react'
import new1 from "./profilegif.json"
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div className="fullpage">
      {user && (
        <div className="profile">
          <h2 className="h2text">My Profile</h2>
          <div className="gifpro">

          <Lottie animationData={new1} className='gif' loop={true}/>
          <div className="line2">
            
          </div>
          </div>
          <div className="profile-info">
            <div className="usercon">

            <p>
              <strong className="namecon">Name - {user.name}</strong>
            </p>
            </div>
            <div className="usercon">

            <p>
              <strong>Email - {user.email}</strong>
            </p>

            </div>
            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn4"
            >
              <MdDashboard />
              Dashboard
            </button>

            <br />

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn1"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}

            <br />

            <button
              onClick={logoutHandler}
              className="common-btn3"
              style={{ background: "red" }}
            >
              <IoMdLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
