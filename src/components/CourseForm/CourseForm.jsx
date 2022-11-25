import React, { useState } from "react";
import Button from "../../common/Button/Button";
// import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import AuthorItem from "./components/AuthorItem/AuthorItem";
import Input from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, createAuthor } from "../../store";

const CourseForm = () => {
  const [authorInput, setAuthorInput] = useState("");
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.courses.authors);

  const handleChange = (event) => {
    setAuthorInput(event.target.value);
  };

  function addAuthor(author) {
    if (courseAuthors.includes(author)) return;

    setCourseAuthors([...courseAuthors, author]);
  }

  function deleteAuthor(authorName) {
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(
      addCourse({
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
        duration: Number(event.target.elements.duration.value),
        authors: courseAuthors.map((author) => {
          return author.id;
        }),
      })
    );
    navigate("/courses");
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
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
                onClick={() => {
                  dispatch(createAuthor(authorInput));
                }}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            {authors.map((element, index) => {
              return (
                <AuthorItem
                  key={index}
                  authorName={element.name}
                  btnText="Add author"
                  btnOnClick={() => addAuthor(element)}
                  btnType={"button"}
                />
              );
            })}
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
            {courseAuthors.map((element, index) => {
              return (
                <AuthorItem
                  key={index}
                  authorName={element.name}
                  btnOnClick={() => deleteAuthor(element)}
                  btnText="Delete author"
                  btnType={"button"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
