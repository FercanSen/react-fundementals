import React, { useState } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import PropTypes from "prop-types";
import getCourseDuration from "../../helpers/getCourseDuration";

export default function Courses({
  mockedCoursesList,
  showCreateCourseForm,
  setShowCreateCourseForm,
}) {
  Courses.propTypes = {
    mockedCoursesList: PropTypes.array,
    showCreateCourseForm: PropTypes.bool,
    setShowCreateCourseForm: PropTypes.func,
  };
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <SearchBar onChange={handleChange} />
        <Button
          buttonText={"Add new course"}
          onClick={() => setShowCreateCourseForm(!showCreateCourseForm)}
        />
      </div>
      {mockedCoursesList
        .filter((course) => course.title.toLocaleLowerCase().includes(query))
        .map((element, index) => {
          return (
            <CourseCard
              key={index}
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
