import React from "react";
import "./input.styles.scss";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { noteText: "" };
  }

  MakeNotes = function (noteText) {
    this.text = noteText;
    this.color = "#39a0ed";
    this.subcolor = "#95ccf5";
  };

  handleChange = (event) => {
    this.setState({ noteText: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNotes(new this.MakeNotes(this.state.noteText));
    this.setState({ noteText: "" });
  };

  render() {
    return (
      <div>
        <h1 className="title">React Notes</h1>

        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            placeholder="Add your notes here!"
            onChange={this.handleChange}
            value={this.state.noteText}
            className="input"
          ></input>
          <button children="Add" className="button" />
        </form>
      </div>
    );
  }
}

export default Input;
