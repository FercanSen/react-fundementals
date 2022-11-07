import React from "react";
import PropTypes from "prop-types";

function Input({
  labelText,
  placeholderText,
  inputType,
  inputValue,
  inputName,
  onChange,
  isRequired,
  minLength,
}) {
  Input.propTypes = {
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,
    inputType: PropTypes.string,
    inputValue: PropTypes.string,
    inputName: PropTypes.string,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    minLength: PropTypes.string,
  };

  let required = false;

  if (isRequired) required = true;

  return (
    <div className="flex flex-col">
      <label className="my-2" htmlFor="input">{labelText}</label>
      <input
        className="border-2 border-blue-500 rounded"
        id="input"
        type={inputType}
        name={inputName}
        placeholder={placeholderText}
        value={inputValue}
        onChange={onChange}
        required={required}
        minLength={minLength}
      />
    </div>
  );
}

export default Input;
