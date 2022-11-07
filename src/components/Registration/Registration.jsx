import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { Link } from "react-router-dom";
import axios from "axios";



function Registration() {
    function submitRegister(event) {
      axios
        .post("http://localhost:4000/register", {
          name: event.target.elements.name.value,
          email: event.target.elements.email.value,
          password: event.target.elements.password.value,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });
        event.preventDefault();
    }

//   function handleRegister(event) {
//     console.log(event.target.elements.name.value);
//     console.log(event.target.elements.email.value);
//     console.log(event.target.elements.password.value);
//     event.preventDefault();
//   }
  return (
    <form action="" onSubmit={submitRegister}>
      <div className="flex flex-col gap-7 items-center justify-center h-screen">
        <Input labelText={"Name"} placeholderText={"Enter name"} inputName={"name"} />
        <Input labelText={"Email"} placeholderText={"Enter email"} inputName={"email"}/>
        <Input labelText={"Password"} placeholderText={"Enter password"} inputName={"password"}/>
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
