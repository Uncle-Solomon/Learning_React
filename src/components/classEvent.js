import { Component } from "react";

class ClassEvent extends Component {
  handleCLick() {
    console.log("Class CLick Works");
  }
  render() {
    return (
      <div>
        <h3>This is a class based component</h3>
        <button onClick={this.handleCLick}>Click</button>
      </div>
    );
  }
}

export default ClassEvent;
