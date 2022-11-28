import React from "react";
import logo from "./logo.png";

const Logo = () => {
  return (
    <img data-testid="logo" className="h-full" src={logo} alt="App Logo" />
  );
};

export default Logo;
