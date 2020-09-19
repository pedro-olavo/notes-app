import React from "react";
import "./notes.styles.scss";

const Notes = ({ listNotes }) => {
  return (
    <div className="main-note-conteiner">
      {listNotes.map((element) => {
        console.log(element);
        return (
          <div
            className="note-conteiner"
            key={element.id}
            style={{ backgroundColor: `${element.color}` }}
          >
            <p>{element.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
