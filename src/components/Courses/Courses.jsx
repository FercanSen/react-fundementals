import React from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import PropTypes from "prop-types";
import getCourseDuration from "../../helpers/getCourseDuration";

function Courses({ mockedCoursesList }) {
  Courses.propTypes = {
    mockedCoursesList: PropTypes.object,
  };
  return (
    <div className="m-8">
      <div className="flex justify-between">
        <SearchBar />
        <Button buttonText={"Add new course"} />
      </div>
      {mockedCoursesList.map((element, index) => {
        console.log("Authors");
        console.log(element.authors);
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

export default Courses;
