import React from "react";
import Button from "../../common/Button/Button";

function CreateCourse() {
  return (
    <div className="flex flex-col bg-blue-200">
      <div className="flex justify-between items-center">
        <div className="flex-col bg-red-400">
          <h2>Title</h2>
          <input type="text" placeholder="Enter Title..." name="title" />
          <label htmlFor="title"></label>
        </div>
        <Button buttonText={"Create course"} />
      </div>
      <h2>Description</h2>
      <textarea
        className="h-36 border-2 border-blue-500 rounded"
        value={"Enter Description"}
      />
      <div className="flex justify-evenly bg-green-500">
        <h2>Add author</h2>
        <h2>Authors</h2>
      </div>
      <div className="flex ">
        <div className="w-1/2 bg-red-500">
          <h2>Author name</h2>
          <input type="text" placeholder="Enter Title..." name="title" />
          <label htmlFor="title"></label>
        </div>
        <div className="w-1/2 bg-yellow-500">Author List</div>
      </div>
      <div className="flex justify-evenly bg-green-500">
        <h2>Duration</h2>
        <h2>Course authors</h2>
      </div>
    </div>
  );
}

export default CreateCourse;
