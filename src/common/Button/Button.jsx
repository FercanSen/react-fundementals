import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, buttonText }) {
  Button.propTypes = {
    onClick: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
