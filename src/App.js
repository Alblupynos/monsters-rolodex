import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Alia",
    };
  }
  render() {
    return (
      <div className="App">
        <p>Hi {this.state.name}</p>
        <button
          onClick={() => {
            this.setState(
              () => {
                return { name: "Nori" };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
