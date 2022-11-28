import React from "react";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../../store";
import getAuthorNames from "../../../../helpers/getAuthorNames";

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  authors: PropTypes.array,
  isAdmin: PropTypes.bool,
};

const CourseCard = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
  isAdmin,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex mt-8 border-2 border-blue-500 rounded-lg">
      <div className="flex-col my-3 px-3 ">
        <h1 data-testid="title" className="font-bold">{title}</h1>
        <div data-testid="description" className="">{description}</div>
      </div>
      <div className="flex flex-col gap-2 justify-between items-start h-max my-3 px-3">
        <div data-testid="authors" className="truncate w-96">
          Authors: {getAuthorNames(authors).join(", ")}
        </div>
        <div data-testid="duration" >Duration: {duration}</div>
        <div data-testid="creationDate" >Created: {creationDate}</div>
        <div className="flex flex-row gap-2 justify-center w-full">
          <Link to={`/courses/${id}`}>
            <Button buttonText={"Show Course"} />
          </Link>
          {isAdmin && (
            <>
              <Button
                buttonText={"Delete"}
                onClick={() => {
                  dispatch(deleteCourse(id));
                  // dispatch(deleteCourse(id));
                }}
              />
              <Button buttonText={"Edit"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = propTypes;
export default CourseCard;
