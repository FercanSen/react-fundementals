import React from "react";
import PropTypes from "prop-types";

function Input({ labelText, placeholderText, inputValue, onChange }) {
  Input.propTypes = {
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
  };
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="input">{labelText}</label>
        <input
          className="border-2 border-blue-500 rounded-lg"
          id="input"
          name="input"
          placeholder={placeholderText}
          value={inputValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
