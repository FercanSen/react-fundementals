import React from "react";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";

const propTypes = {
  authorName: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  btnOnClick: PropTypes.func,
};

const AuthorItem = ({ authorName, btnText, btnOnClick, btnType }) => {
  return (
    <div className="flex justify-between items-center m-2">
      <p>{authorName}</p>
      <Button buttonText={btnText} onClick={btnOnClick} btnType={btnType} />
    </div>
  );
};

AuthorItem.propTypes = propTypes;
export default AuthorItem;
