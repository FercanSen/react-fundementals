import React, { useEffect } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import getCourseDuration from "../../helpers/getCourseDuration";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors, fetchCourses, getCurrentUser } from "../../store";

const Courses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let courses = useSelector((state) => state.courses.courses);

  if (courses[0]) {
    console.log(courses[0].id);
  }

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchCourses());
    dispatch(fetchAuthors());
  }, []);

  const user = useSelector((state) => state.courses.user);
  let isAdmin = false;

  if (user.role === "admin") {
    isAdmin = true;
  }

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
        {isAdmin && (
          <Button
            buttonText={"Add new course"}
            onClick={() => navigate("/courses/add")}
          />
        )}
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
            isAdmin={isAdmin}
          ></CourseCard>
        );
      })}
    </div>
  );
};

export default Courses;
