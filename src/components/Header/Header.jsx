import React from "react";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
function Header() {
  return (
    <header className="flex justify-between items-center h-20 mx-24 py-2">
      <Logo />
      <div className="flex justify-around items-center w-72">
        <h2>John Doe</h2>
        <Button buttonText="Logout" />
      </div>
    </header>
  );
}

export default Header;
