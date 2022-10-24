import React from "react";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";
import { mockedAuthorsList } from "../../../../constants";

function CourseCard({ title, description, creationDate, duration, authors }) {
  CourseCard.propTypes = {
    title: PropTypes.func,
    description: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
  };
  const authorNames = [];

  mockedAuthorsList.map((element) => {
    if (authors.includes(element.id)) {
      authorNames.push(element.name);
    }
  });

  return (
    <div className="flex mt-8 border-2 border-blue-500 rounded-lg">
      <div className="flex-col my-3 px-3 ">
        <h1 className="font-bold">{title}</h1>
        <div className="">{description}</div>
      </div>
      <div className="flex flex-col gap-2 justify-between items-start h-max my-3 px-3">
        <div className="truncate w-96">Authors: {authorNames.join(", ")}</div>
        <div>Duration: {duration}</div>
        <div>Created: {creationDate}</div>
        <div className="flex flex-row justify-center w-full">
          <Button buttonText={"Show Course"} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
