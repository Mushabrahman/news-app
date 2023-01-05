import React, { Component } from "react";
import tenor from "./tenor.gif";
import "./Spinner.css";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={tenor} alt="tenor" />
      </div>
    );
  }
}

export default Spinner;
