import { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    myWidth: 50,
  };
  handleChange = (event) => {
    this.setState({
      firstName: event.target.value,
      myWidth: 100,
    });
    console.log(this.state.myWidth);
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
        </form>
      </div>
    );
  }
}

export default Form;
