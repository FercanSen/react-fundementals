import React from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { mockedAuthorsList } from "./constants";
import { mockedCoursesList } from "./constants";

function App() {
  return (
    <>
      <Header />
      <Courses
        mockedAuthorsList={mockedAuthorsList}
        mockedCoursesList={mockedCoursesList}
      />
    </>
  );
}

export default App;
