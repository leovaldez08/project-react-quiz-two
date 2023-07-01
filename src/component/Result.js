import React, { Component } from "react";
import "../styles/Result.css";

export default class Result extends Component {
  render() {
    return (
      <div className="main">
        <div className="result">
          <div>Final Results</div>
          <div>4 out of 5 correct - 80%</div>
          <div className="restart">
            <button>Restart</button>
          </div>
        </div>
      </div>
    );
  }
}
