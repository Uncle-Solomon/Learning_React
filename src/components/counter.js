import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // Event binding can be done using the bind(this) method
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  //   Or by simply using an arrow function whihch ensures that thee this keyword is recognized
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <h3>Count Value is: {this.state.counter} </h3>
        <button onClick={this.increment}>Increase!</button>
        <button onClick={this.decrement}>Decrease!</button>
      </div>
    );
  }
}

export default Counter;
