import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../../common/Button/Button";
import { saveUser } from "../../store";
import Logo from "./components/Logo/Logo";

function Header() {
  let location = useLocation();

  const username = useSelector((state) => state.courses.user.name);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.courses.user);

  if (location.pathname === "/registration") {
    return (
      <header className="flex justify-between items-center h-20 mx-24 py-2">
        <Logo />
      </header>
    );
  } else if (location.pathname === "/login") {
    return (
      <header className="flex justify-between items-center h-20 mx-24 py-2">
        <Logo />
      </header>
    );
  } else
    return (
      <header className="flex justify-between items-center h-20 mx-24 py-2">
        <Logo />
        <div className="flex justify-around items-center w-72">
          <h2>{username}</h2>
          <Link to={"/login"}>
            <Button
              buttonText="Logout"
              onClick={() => {
                localStorage.removeItem("userToken");
                dispatch(saveUser([false, "", "", ""]));
              }}
            />
          </Link>
        </div>
      </header>
    );
}

export default Header;
