import React from "react";
// import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CourseForm from "../CourseForm/CourseForm";

const propTypes = {
  children: PropTypes.object,
};

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.courses.user);

  if (user.role === "admin") {
    return <CourseForm />;
  } else children;
}

PrivateRoute.propTypes = propTypes;
export default PrivateRoute;
