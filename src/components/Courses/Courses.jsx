import React, { useEffect } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import getCourseDuration from "../../helpers/getCourseDuration";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAuthor, addCourse } from "../../store";

export default function Courses() {
  const navigate = useNavigate();

  let courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/all")
      .then(function (response) {
        dispatch(addCourse(response.data.result[0]));
      })
      .catch(function (error) {
        console.log(error.response);
      });
    axios
      .get("http://localhost:4000/authors/all")
      .then(function (response) {
        dispatch(addAuthor(response.data.result));
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
