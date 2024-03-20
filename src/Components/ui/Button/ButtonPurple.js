import React from "react";
import "./Button.scss";
const ButtonPurple = ({ title, width, padding }) => {
  return (
    <button
      className="button-purple"
      style={{ width: "100%", maxWidth: width, padding }}
    >
      {title}
    </button>
  );
};

export default ButtonPurple;
