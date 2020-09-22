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
    this.setState({ listNotes: [...this.state.listNotes, note] });
  };
  removeNotes = (id) => {
    let newArray = [...this.state.listNotes];
    newArray.splice(id, 1);
    this.setState({ listNotes: newArray });
  };

  render() {
    return (
      <div className="App">
        <Input addNotes={this.addNotes} />
        <MainCointeiner
          listNotes={this.state.listNotes}
          removeNotes={this.removeNotes}
        />
      </div>
    );
  }
}

export default App;
