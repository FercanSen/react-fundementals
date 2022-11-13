import React from "react";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import PropTypes from "prop-types";

function SearchBar({
  btnOnClick,
  inputLabelText,
  inputPlaceholderText,
  inputValue,
  onChange,
}) {
  SearchBar.propTypes = {
    btnOnClick: PropTypes.func,
    inputLabelText: PropTypes.string,
    inputPlaceholderText: PropTypes.string,
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        inputPlaceholderText={inputPlaceholderText}
        inputLabelText={inputLabelText}
        onChange={onChange}
        labelText={inputLabelText}
        inputValue={inputValue}
      />
      <Button buttonText={"Search"} onClick={btnOnClick} />
    </div>
  );
}

export default SearchBar;
