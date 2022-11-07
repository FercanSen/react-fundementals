import React, { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import AuthorItem from "./components/AuthorItem/AuthorItem";
import PropTypes from "prop-types";

function CreateCourse({ showCreateCourseForm, setShowCreateCourseForm }) {
  CreateCourse.propTypes = {
    showCreateCourseForm: PropTypes.bool,
    setShowCreateCourseForm: PropTypes.func,
  };
  const [authorInput, setAuthorInput] = useState("");
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [author, setAuthor] = useState("");
  let authorId = Math.random();

  const [course, setCourse] = useState({
    id: "0",
    title: "",
    description: "",
    creationDate: "",
    duration: 0,
    authors: [authorId],
  });

  useEffect(() => {
    if (course.title != "") {
      mockedCoursesList.push(course);
    }
  }, [course]);

  useEffect(() => {
    if (author) {
      mockedAuthorsList.push({ id: authorId, name: author });
    }
  }, [author]);

  const handleChange = (event) => {
    setAuthorInput(event.target.value);
  };

  const handleClick = () => {
    setAuthor(authorInput);
    setAuthorInput("");
  };

  function addAuthor(authorName) {
    if (courseAuthors.includes(authorName)) return;

    setCourseAuthors([...courseAuthors, authorName]);
  }

  function deleteAuthor(authorName) {
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCourse({
      id: Math.random(),
      title: event.target.elements.title.value,
      description: event.target.elements.description.value,
      creationDate: formatCreationDate(),
      duration: event.target.elements.duration.value,
      authors: [authorId],
    });
    setShowCreateCourseForm(!showCreateCourseForm);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col m-8 p-4 border-2 rounded">
        <div className="flex  justify-between items-center">
          <div className="flex-col">
            <h2 className="my-2">Title</h2>
            <input
              className="border-2 border-blue-500 rounded"
              type="text"
              placeholder="Enter Title..."
              name="title"
              required
            />
            <label htmlFor="title"></label>
          </div>
          <Button buttonText={"Create course"} btnType={"submit"} />
        </div>
        <h2 className="my-2">Description</h2>
        <textarea
          className="h-36 border-2 border-blue-500 rounded"
          name="description"
          placeholder="Enter Description"
          minLength="2"
          required
        />
        <div className="flex justify-evenly ">
          <h2>Add author</h2>
          <h2>Authors</h2>
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 p-2 ">
            <h2 className="my-2">Author name</h2>
            <input
              className="border-2 border-blue-500 rounded"
              type="text"
              placeholder="Enter author name..."
              name="authorName"
              minLength="2"
              value={authorInput}
              onChange={handleChange}
            />
            <label htmlFor="authorName"></label>
            <div className="flex flex-row justify-center my-2">
              <Button
                btnType={"button"}
                buttonText={"Create author"}
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            {mockedAuthorsList.map((element, index) => (
              <AuthorItem
                key={index}
                authorName={element.name}
                btnText="Add author"
                btnOnClick={() => addAuthor(element.name)}
                btnType={"button"}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-evenly ">
          <h2>Duration</h2>
          <h2>Course authors</h2>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col w-1/2 p-2 ">
            <h2 className="my-2">Duration</h2>
            <input
              className="border-2 border-blue-500 rounded"
              type="number"
              placeholder="Enter duration in minutes..."
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            <label htmlFor="duration"></label>
            <h2 className="my-2">Duration: {getCourseDuration(duration)}</h2>
          </div>
          <div className="w-1/2">
            {courseAuthors.map((element, index) => (
              <AuthorItem
                key={index}
                authorName={element}
                btnOnClick={() => deleteAuthor(element)}
                btnText="Delete author"
                btnType={"button"}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateCourse;
