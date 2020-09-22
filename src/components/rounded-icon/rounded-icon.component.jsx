import React from "react";
import "./rounded-icon.styles.scss";

const RoundedIcon = ({
  roundColor,
  fontsize,
  icon,
  iconColor,
  size,
  cursor,
}) => {
  return (
    <button
      className="icon-button"
      style={{
        backgroundColor: roundColor,
        fontSize: fontsize,
        width: size,
        height: size,
        cursor: cursor,
      }}
    >
      <i className={icon} style={{ color: iconColor }}></i>
    </button>
  );
};

export default RoundedIcon;
