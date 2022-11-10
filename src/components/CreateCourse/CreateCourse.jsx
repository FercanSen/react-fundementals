import React, { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import AuthorItem from "./components/AuthorItem/AuthorItem";
import PropTypes from "prop-types";
import Input from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";

function CreateCourse() {
  CreateCourse.propTypes = {
    showCreateCourseForm: PropTypes.bool,
    setShowCreateCourseForm: PropTypes.func,
  };
  const [authorInput, setAuthorInput] = useState("");
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);
  let authorId = Math.random();
  const navigate = useNavigate();

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

  const handleChange = (event) => {
    setAuthorInput(event.target.value);
  };

  const createAuthor = () => {
    let shouldReturn = false;
    mockedAuthorsList.forEach((element) => {
      if (element.name === authorInput) {
        shouldReturn = true;
        return;
      }
    });
    if (shouldReturn) return;

    if (authorInput)
      mockedAuthorsList.push({ id: authorId, name: authorInput });

    setAuthorInput("");
  };

  function addAuthor(authorName) {
    if (courseAuthors.includes(authorName)) return;

    setCourseAuthors([...courseAuthors, authorName]);
  }

  function deleteAuthor(authorName) {
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setCourse({
      id: Math.random(),
      title: event.target.elements.title.value,
      description: event.target.elements.description.value,
      creationDate: formatCreationDate(),
      duration: event.target.elements.duration.value,
      authors: [authorId],
    });
    navigate("/courses");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col m-8 p-4 border-2 rounded">
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <Input
              labelText={"Title"}
              placeholderText={"Enter Title..."}
              inputName={"title"}
              inputType={"text"}
              isRequired={true}
            />
          </div>
          <Button buttonText={"Create course"} btnType={"submit"} />
        </div>
        <Input
          className="my-20"
          labelText={"Description"}
          placeholderText={"Enter Description"}
          inputName={"description"}
          inputType={"textarea"}
          isRequired={true}
          minLength={"2"}
        />
        <div className="flex justify-evenly ">
          <h2>Add author</h2>
          <h2>Authors</h2>
        </div>
        <div className="flex">
          <div className="flex flex-col w-1/2 p-2 ">
            <Input
              labelText={"Author name"}
              placeholderText={"Enter author name..."}
              inputName={"authorName"}
              inputType={"textarea"}
              minLength={"2"}
              inputValue={authorInput}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-center my-2">
              <Button
                btnType={"button"}
                buttonText={"Create author"}
                onClick={createAuthor}
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
            <Input
              labelText={"Duration"}
              placeholderText={"Enter duration in minutes..."}
              inputName={"duration"}
              inputType={"number"}
              inputValue={duration}
              isRequired={true}
              onChange={(e) => setDuration(e.target.value)}
            />
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
