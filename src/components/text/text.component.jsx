import React from "react";
import "./text.styles.scss";

const Text = ({ text }) => {
  return (
    <div className="text-div">
      <p>{text}</p>
    </div>
  );
};

export default Text;
