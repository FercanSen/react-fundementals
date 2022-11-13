import React, { useEffect } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import getCourseDuration from "../../helpers/getCourseDuration";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../store";

export default function Courses() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let courses = useSelector((state) => state.courses.courses);

  console.log("State: ");
  console.log(courses);

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/all")
      .then(function (response) {
        console.log("response");
        console.log(response.data.result[0]);
        dispatch(addCourse(response.data.result[0]));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  useEffect(() => {
    // IF user token exist navigate to courses, else register/login
    if (!localStorage.getItem("userToken")) {
      navigate("/registration");
    } else {
      navigate("/courses");
    }
  }, []);

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <SearchBar />
        {/* <SearchBar btnOnClick={() => dispatch(addCourse("first"))} /> */}
        <Button
          buttonText={"Add new course"}
          onClick={() => navigate("/courses/add")}
        />
      </div>
      {courses.map((element, index) => {
        return (
          <CourseCard
            key={index}
            id={element.id}
            title={element.title}
            description={element.description}
            creationDate={element.creationDate}
            duration={getCourseDuration(element.duration)}
            authors={element.authors}
          ></CourseCard>
        );
      })}
    </div>
  );
}
