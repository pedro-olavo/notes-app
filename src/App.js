import React from "react";
import "./App.css";
import Input from "./components/input/input.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = { listNotes: [] };
  }
  addNotes = (note) => {
    this.setState({ listNotes: [...this.state.listNotes, note] }, () => {
      console.log(this.state.listNotes);
    });
    console.log(this.state.listNotes);
  };
  render() {
    return (
      <div className="App">
        <Input addNotes={this.addNotes} />
      </div>
    );
  }
}

export default App;
