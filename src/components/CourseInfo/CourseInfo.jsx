import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../common/Button/Button";
import getAuthorNames from "../../helpers/getAuthorNames";
import getCourseDuration from "../../helpers/getCourseDuration";

const CourseInfo = () => {
  let { courseId } = useParams();
  let title;
  let description;
  let duration;
  let authors;
  let creationDate;

  const courses = useSelector((state) => state.courses.courses);

  courses.forEach((element) => {
    if (courseId == element.id) {
      title = element.title;
      description = element.description;
      duration = element.duration;
      authors = element.authors;
      creationDate = element.creationDate;
    }
  });

  return (
    <div className="m-8 border rounded border-blue-500">
      <div className="m-2">
        <Link to={"/courses"}>
          <Button buttonText={" \u1438 Back to courses"} />
        </Link>
      </div>
      <h1 className="flex justify-center mb-10 text-4xl">{title}</h1>
      <div className="flex w-full">
        <div className="p-4">{description}</div>
        <div className="flex flex-col gap-2 w-full p-4">
          <div>
            <h1 className="font-bold inline">ID: </h1>
            {courseId}
          </div>
          <div>
            <h1 className="font-bold inline">Duration: </h1>
            {getCourseDuration(duration)}
          </div>
          <div>
            <h1 className="font-bold inline">Created: </h1>
            {creationDate}
          </div>
          <div>
            <h1 className="font-bold">Authors: </h1>
            {authors.map((element, index) => {
              return <p key={index}>{getAuthorNames(element)}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
