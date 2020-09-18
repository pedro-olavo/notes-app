import React from "react";
import "./input.styles.scss";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { noteText: "" };
  }
  handleChange = (event) => {
    this.setState({ noteText: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>React Notes</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ noteText: "" });
            this.props.addNotes(this.state.noteText);
          }}
        >
          <input
            type="text"
            placeholder="Add your notes here!"
            onChange={this.handleChange}
            value={this.state.noteText}
          ></input>
          <button children="Add" />
        </form>
      </div>
    );
  }
}

export default Input;
