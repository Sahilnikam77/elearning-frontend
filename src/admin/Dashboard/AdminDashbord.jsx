import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import Lottie from 'lottie-react'
import new1 from "./hiii.json"
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <div className="info">

          <div className="box">
            <p>Total Courses</p>
            <p className="no">{stats.totalCoures}</p>
          </div>
          <div className="box">
            <p>Total Lectures</p>
            <p className="no">{stats.totalLectures}</p>
          </div>
          <div className="box">
            <p>Total Users</p>
            <p className="no">{stats.totalUsers}</p>
          </div>
          </div>
          <div className="gif3">
          <Lottie animationData={new1} className='gif' loop={true}/>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;
