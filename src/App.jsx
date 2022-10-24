import React from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { mockedAuthorsList } from "./constants";
import { mockedCoursesList } from "./constants";

function App() {
  console.log("App");
  console.log(mockedCoursesList);
  console.log(mockedAuthorsList);
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
