import React from "react";
import PropTypes from "prop-types";

function Input({ labelText, placeholderText, onChange }) {
  Input.propTypes = {
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func,
  };
  return (
    <div>
      <input
      className="border-2 border-blue-500 rounded-lg"
        name="input"
        placeholder={placeholderText}
        label={labelText}
        onChange={onChange}
      ></input>
      <label htmlFor="input"></label>
    </div>
  );
}

export default Input;
