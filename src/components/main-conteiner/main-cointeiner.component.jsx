import React from "react";
import "./main-cointeiner.styles.scss";
import Notes from ".././notes/notes.component.jsx";
const MainConteiner = (props) => {
  return (
    <div className="conteiner">
      <Notes listNotes={props.listNotes} />
    </div>
  );
};

export default MainConteiner;
