import React from "react";
import "./notes.styles.scss";
import Footer from ".././footer/footer.component";
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
            <Text text={element.text} />
            <Footer subcolor={element.subcolor} color={element.color} />
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
