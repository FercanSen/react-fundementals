import React from "react";
import { render } from "@testing-library/react";

// import App from "../../../App"
import Header from "../Header";

describe("Header", () => {
  test("renders App component", () => {
    render(<Header />);
  });
});
