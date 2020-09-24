import React from "react";
import "./notes.styles.scss";
import Text from ".././text/text.component";
import Header from ".././header/header.component";
const Notes = ({ listNotes, removeNotes }) => {
  return (
    <div className="main-note-container">
      {listNotes.map((element, index) => {
        return (
          <div
            className="note-container"
            key={index}
            style={{ backgroundColor: `${element.color}` }}
          >
            <Header
              color={element.color}
              subcolor={element.subcolor}
              removeNotes={removeNotes}
              noteId={index}
            />
            <Text
              text={element.text}
              subcolor={element.subcolor}
              color={element.color}
              date={element.date}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
