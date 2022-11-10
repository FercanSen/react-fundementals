import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  
  function login(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
      .then(function (response) {
        console.log(response.data.result);
        localStorage["userToken"] = response.data.result;
        navigate("/courses");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.message);
        console.log(error.request);
      });
  }

  return (
    <form action="" onSubmit={login}>
      <div className="flex flex-col gap-7 items-center justify-center h-screen">
        <Input
          labelText={"Name"}
          placeholderText={"Enter name"}
          inputName={"name"}
        />
        <Input
          labelText={"Email"}
          placeholderText={"Enter email"}
          inputName={"email"}
        />
        <Input
          labelText={"Password"}
          placeholderText={"Enter password"}
          inputName={"password"}
        />
        <Button buttonText={"Login"} />
        <div>
          If you do not have an account{" "}
          <Link className="text-blue-500" to={`/registration`}>
            Registration
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
