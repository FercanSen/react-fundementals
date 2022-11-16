import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  btnType: PropTypes.string,
};

const Button = ({ onClick, buttonText, btnType }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      type={btnType}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = propTypes;
export default Button;
