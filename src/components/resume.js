import { Component } from "react";

class Resume extends Component {
  render() {
    const { name } = this.props;
    return <h2>This is a class component {name}</h2>;
  }
}

export default Resume;
