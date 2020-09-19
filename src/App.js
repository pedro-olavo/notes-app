import React from "react";
import "./App.css";
import Input from "./components/input/input.component.jsx";
import MainCointeiner from "./components/main-conteiner/main-cointeiner.component.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = { listNotes: [] };
  }
  addNotes = (note) => {
    note.id = this.state.listNotes.length;
    this.setState({ listNotes: [...this.state.listNotes, note] });
  };
  render() {
    return (
      <div className="App">
        <Input addNotes={this.addNotes} />
        <MainCointeiner listNotes={this.state.listNotes} />
      </div>
    );
  }
}

export default App;
