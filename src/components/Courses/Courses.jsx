import React, { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import getCourseDuration from "../../helpers/getCourseDuration";
import { mockedCoursesList } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [query, setQuery] = useState("");
  console.log("User Token: " + localStorage.getItem("userToken"));

  function handleChange(event) {
    setQuery(event.target.value);
  }

  const navigate = useNavigate();

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
        <SearchBar onChange={handleChange} />
        <Button
          buttonText={"Add new course"}
          onClick={() => navigate("/courses/add")}
        />
      </div>
      {mockedCoursesList
        .filter((course) => course.title.toLocaleLowerCase().includes(query))
        .map((element, index) => {
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
