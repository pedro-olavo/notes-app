import React from "react";
import "./main-cointeiner.styles.scss";
import Notes from ".././notes/notes.component.jsx";
const MainConteiner = (props) => {
  return (
    <div className="container">
      <Notes listNotes={props.listNotes} removeNotes={props.removeNotes} />
    </div>
  );
};

export default MainConteiner;
