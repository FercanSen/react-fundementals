import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import CreateCourse from "./components/CreateCourse/CreateCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/add" element={<CreateCourse />} />
          <Route path="/courses/:courseId" element={<CourseInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
