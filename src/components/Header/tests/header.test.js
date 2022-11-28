import React from "react";

import { render, screen } from "@testing-library/react";

import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ["fero"],
}));

test("test", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const username = screen.getByTestId("username");
  const logo = screen.getByTestId("logo");
  expect(username).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  // screen.debug();
});
