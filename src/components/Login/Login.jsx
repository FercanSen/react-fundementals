import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

function Login() {
  return (
    <form action="">
      <div className="flex flex-col gap-7 items-center justify-center h-screen">
        <Input labelText={"Email"} placeholderText={"Enter email"} />
        <Input labelText={"Password"} placeholderText={"Enter password"} />
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
