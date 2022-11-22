import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import CourseForm from "./components/CourseForm/CourseForm";
import { configureStore } from "@reduxjs/toolkit";
import courses from "./store";

export const store = configureStore({
  reducer: {
    courses,
  },
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/add" element={<CourseForm />} />
          <Route path="/courses/:courseId" element={<CourseInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
