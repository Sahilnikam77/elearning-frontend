import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
    <div className="courses">
      <h2 className="coursetext">Available Courses</h2>
      <div className="linenew"></div>
<div className="course-con">

      <div className="course-container">
        

        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet!</p>
        )}
        </div>
      </div>
   
        </div>
  );
};

export default Courses;
