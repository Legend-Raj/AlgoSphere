import React, { Component } from 'react';
import EntryPoint from './entryPoint';
import Search from './search';
import Navbar from './navbar';

class BinarySearch extends Component {
  state = {
    upper: 100,
    lower: 0,
    max: 100,
    isRunning: false,
  };

  handleStartGame = () => {
    this.setState({ isRunning: true });
  };

  handleRestart = () => {
    this.setState({ isRunning: false, upper: 100, lower: 0 });
  };

  handleYes = () => {
    const mid = this.calculateMid();
    this.setState({ lower: mid + 1 });
  };

  handleNo = () => {
    const mid = this.calculateMid();
    this.setState({ upper: mid });
  };

  handleSetUpper = (up) => {
    let val = parseInt(up);
    if (isNaN(val) || val <= 0) {
      val = 100;
    }
    this.setState({ upper: val, max: val });
  };

  calculateMid = () => Math.floor((this.state.upper + this.state.lower) / 2);

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <center>
          {!this.state.isRunning && (
            <EntryPoint
              startGame={this.handleStartGame}
              upper={this.state.upper}
              setUpper={this.handleSetUpper}
            />
          )}
          {this.state.isRunning && (
            <Search
              yesButton={this.handleYes}
              noButton={this.handleNo}
              upper={this.state.upper}
              lower={this.state.lower}
              max={this.state.max}
              onRestart={this.handleRestart}
            />
          )}
        </center>
      </div>
    );
  }
}

export default BinarySearch;
