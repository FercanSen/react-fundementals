import React, { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { mockedAuthorsList } from "../../constants";
import getCourseDuration from "../../helpers/getCourseDuration";
import AuthorItem from "./components/AuthorItem/AuthorItem";

function CreateCourse() {
  const [authorInput, setAuthorInput] = useState("");
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [author, setAuthor] = useState("");
  let authorId = Math.random();

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
    setCourseAuthors([...courseAuthors, authorName]);
  }

  function deleteAuthor(authorName) {
    // setCourseAuthors([...courseAuthors, authorName]);
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  }

  return (
    <div className="flex flex-col m-8 p-4 border-2 rounded">
      <div className="flex  justify-between items-center">
        <div className="flex-col">
          <h2 className="my-2">Title</h2>
          <input
            className="border-2 border-blue-500 rounded"
            type="text"
            placeholder="Enter Title..."
            name="title"
          />
          <label htmlFor="title"></label>
        </div>
        <Button buttonText={"Create course"} />
      </div>
      <h2 className="my-2">Description</h2>
      <textarea
        className="h-36 border-2 border-blue-500 rounded"
        placeholder="Enter Description"
        minLength={2}
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
            minLength={2}
            value={authorInput}
            onChange={handleChange}
          />
          <label htmlFor="authorName"></label>
          <div className="flex flex-row justify-center my-2">
            <Button buttonText={"Create author"} onClick={handleClick} />
          </div>
        </div>
        <div className="w-1/2 ">
          {mockedAuthorsList.map((element, index) => (
            <AuthorItem
              key={index}
              authorName={element.name}
              btnText="Add author"
              btnOnClick={() => addAuthor(element.name)}
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
          />
          <label htmlFor="duration"></label>
          <h2 className="my-2">Duration: {getCourseDuration(duration)}</h2>
        </div>
        {/* <div>{courseAuthors}</div> */}

        <div className="w-1/2">
          {courseAuthors.map((element, index) => (
            <AuthorItem
              key={index}
              authorName={element}
              btnOnClick={() => deleteAuthor(element)}
              btnText="Delete author"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
