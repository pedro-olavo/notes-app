import React from "react";
import "./header.styles.scss";
import RoundedIcon from ".././rounded-icon/rounded-icon.component";

const Header = ({ subcolor, color, removeNotes, noteId }) => {
  return (
    <div
      className="header-div"
      style={{ backgroundColor: color, borderBottom: `2px solid ${subcolor}` }}
    >
      <div
        className="icon-handler"
        onClick={() => {
          removeNotes(noteId);
        }}
      >
        <RoundedIcon
          icon="fas fa-times"
          iconColor="white"
          fontsize="0.75rem"
          roundColor={subcolor}
          size="1.5rem"
        />
      </div>
    </div>
  );
};
export default Header;
