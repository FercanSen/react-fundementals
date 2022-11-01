import React from "react";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";

function AuthorItem({ authorName, btnText, btnOnClick }) {
  AuthorItem.propTypes = {
    authorName: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnOnClick: PropTypes.func,
  };

  return (
    <div className="flex justify-between items-center m-2">
      <p>{authorName}</p>
      <Button buttonText={btnText} onClick={btnOnClick} />
    </div>
  );
}

export default AuthorItem;
