import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import axios from "axios";
import { saveUser } from "../../store";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function login(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
      .then(function (response) {
        console.log(response.data.user.name);
        dispatch(
          saveUser([
            true,
            response.data.user.name,
            response.data.user.email,
            response.data.result,
          ])
        );
        localStorage["username"] = response.data.user.name;
        localStorage["userToken"] = response.data.result;
        navigate("/courses");
      })
      .catch(function (error) {
        console.log(error);
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
