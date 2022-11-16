import React from "react";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import PropTypes from "prop-types";

const propTypes = {
  btnOnClick: PropTypes.func,
  inputLabelText: PropTypes.string,
  inputPlaceholderText: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

const SearchBar = ({
  btnOnClick,
  inputLabelText,
  inputPlaceholderText,
  inputValue,
  onChange,
}) => {
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
};

SearchBar.propTypes = propTypes;
export default SearchBar;
