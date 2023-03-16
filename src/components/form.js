import { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    myWidth: 50,
  };
  handleChange = (event) => {
    this.setState({
      firstName: event.target.value,
      myWidth: 100,
    });
    console.log(this.state.myWidth);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstName}
            width={`${this.state.myWidth} px`}
          ></input>
          <input
            onChange={this.handleLastNameChange}
            type="text"
            value={this.state.lastName}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;
