import React from "react";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

function SearchBar() {
  return (
    <div className="flex gap-2 items-center">
      <Input placeholderText={"Search Course"} />
      <Button buttonText={"Search"} />
    </div>
  );
}

export default SearchBar;
