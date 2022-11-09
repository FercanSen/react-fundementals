import { mockedAuthorsList } from "../constants";

function getAuthorNames(authors) {
  const authorNames = [];

  mockedAuthorsList.map((element) => {
    if (authors.includes(element.id)) {
      authorNames.push(element.name);
    }
  });

  return authorNames;
}

export default getAuthorNames;
