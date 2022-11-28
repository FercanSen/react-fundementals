import React from "react";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CourseCard from "../CourseCard";
import getCourseDuration from "../../../../../helpers/getCourseDuration";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ["test1", "author1"],
}));

test("test", () => {
  render(
    <BrowserRouter>
      <CourseCard
        key={11}
        id={"42"}
        title={"Title"}
        description={"Course Description"}
        creationDate={"29/11/2022"}
        duration={getCourseDuration(210)}
        authors={["John Doe"]}
        isAdmin={false}
      ></CourseCard>
    </BrowserRouter>
  );

  const title = screen.getByTestId("title");
  const description = screen.getByTestId("description");
  const authors = screen.getByTestId("authors");
  const creationDate = screen.getByTestId("creationDate");
  const duration = screen.getByTestId("duration");

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(authors).toBeInTheDocument();
  expect(creationDate).toBeInTheDocument();
  expect(duration).toBeInTheDocument();

  expect(getCourseDuration(210)).toBe("03:30 hours");
  const expected = [
    expect.stringMatching(
      /^^([0]\d|[1][0-2])\/([0-2]\d|[3][0-1])\/([2][01]|[1][6-9])\d{2}(\s([0-1]\d|[2][0-3])(:[0-5]\d){1,2})?$/
    ),
  ];

  expect.arrayContaining(expected),
    // Date format matching 29/11/2022
    screen.debug();
});
