import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";

function Header() {
  let location = useLocation();
  console.log(location.pathname);

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
          <h2>John Doe</h2>
          <Link to={"/login"}>
            <Button
              buttonText="Logout"
              onClick={() => localStorage.removeItem("userToken")}
            />
          </Link>
        </div>
      </header>
    );
}

export default Header;
