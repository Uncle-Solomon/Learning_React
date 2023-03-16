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
    // console.log(this.state.myWidth);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fName: this.state.firstName,
      lName: this.state.lastName,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
