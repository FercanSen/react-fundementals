import React , { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import { mockedCoursesList } from "./constants";

// import { createBrowserRouter, RouterProvider, /* Route */ } from "react-router-dom";
// import Registration from "./components/Registration/Registration";
// import Login from "./components/Login/Login";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <div>Main Page!</div>,
//   // },
//   {
//     path: "/",
//     element: <Registration />,
//   },
//   {
//     path: "/registration",
//     element: <Registration />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

function App() {
  const [showCreateCourseForm, setShowCreateCourseForm] = useState(false);
  return (
    <>
      <Header />
      {/* <RouterProvider router={router} /> */}
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
