import React from "react";
import "./footer.styles.scss";
import RoundedIcon from ".././rounded-icon/rounded-icon.component";

const Footer = ({ subcolor, color }) => {
  let date = new Date();
  return (
    <div className="footer" style={{ backgroundColor: subcolor }}>
      <p>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}</p>
      <RoundedIcon
        roundColor={color}
        fontsize="1em"
        icon="fas fa-pencil-alt fa-2x"
        iconColor="white"
        size="4em"
      />
    </div>
  );
};

export default Footer;
