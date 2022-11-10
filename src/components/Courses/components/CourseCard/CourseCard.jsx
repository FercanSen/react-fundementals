import React from "react";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getAuthorNames from "../../../../helpers/getAuthorNames";

function CourseCard({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
}) {
  CourseCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    authors: PropTypes.array,
  };

  return (
    <div className="flex mt-8 border-2 border-blue-500 rounded-lg">
      <div className="flex-col my-3 px-3 ">
        <h1 className="font-bold">{title}</h1>
        <div className="">{description}</div>
      </div>
      <div className="flex flex-col gap-2 justify-between items-start h-max my-3 px-3">
        <div className="truncate w-96">
          Authors: {getAuthorNames(authors).join(", ")}
        </div>
        <div>Duration: {duration}</div>
        <div>Created: {creationDate}</div>
        <div className="flex flex-row justify-center w-full">
          <Link to={`/courses/${id}`}>
            <Button buttonText={"Show Course"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
