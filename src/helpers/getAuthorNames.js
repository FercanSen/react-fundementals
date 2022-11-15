import { useSelector } from "react-redux";

function getAuthorNames(authorParams) {
  const authors = useSelector((state) => state.courses.authors);
  const authorNames = [];

  authorParams.forEach((paramElement) => {
    authors.forEach((author) => {
      if (paramElement === author.id) {
        console.log(author.name);
        authorNames.push(author.name);
      }
    });
  });

  return authorNames;
}

export default getAuthorNames;
