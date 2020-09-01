

import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Async extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
      const json = await response.json();
      this.setState({ data: json });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((el,i) => (
            <li>
              {i}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
