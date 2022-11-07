import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <form action="">
      <div className="flex flex-col gap-7 items-center justify-center h-screen">
        <Input labelText={"Name"} placeholderText={"Enter name"} />
        <Input labelText={"Email"} placeholderText={"Enter email"} />
        <Input labelText={"Password"} placeholderText={"Enter password"} />
        <Button buttonText={"Registration"} />
        <div>
          If you have an account{" "}
          <Link className="text-blue-500" to={`/Login`}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Registration;
