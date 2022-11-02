import React, { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import { mockedCoursesList } from "./constants";

function App() {
  const [showCreateCourseForm, setShowCreateCourseForm] = useState(false);
  return (
    <>
      <Header />
      {showCreateCourseForm ? (
        <CreateCourse
          showCreateCourseForm={showCreateCourseForm}
          setShowCreateCourseForm={setShowCreateCourseForm}
        />
      ) : (
        <Courses
          showCreateCourseForm={showCreateCourseForm}
          setShowCreateCourseForm={setShowCreateCourseForm}
          mockedCoursesList={mockedCoursesList}
        />
      )}
    </>
  );
}

export default App;
