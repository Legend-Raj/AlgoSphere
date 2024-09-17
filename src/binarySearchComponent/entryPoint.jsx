import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class EntryPoint extends Component {
  state = {
    error: false,
  };

  render() {
    return (
      <div>
        <TextField
          error={this.state.error}
          id="standard-error-helper-text"
          label="Upper Number"
          type="number"
          variant="outlined"
          helperText={this.state.error ? "Please enter a valid number" : ""}
          onChange={this.getData}
        />
        <br />
        <br />
        <h1>Guess a number between 0 and {this.props.upper}</h1>
        <br />
        <button
          className="btn btn-warning btn-lg"
          onClick={this.props.startGame}
        >
          Start the game
        </button>
      </div>
    );
  }

  getData = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value <= 0) {
      this.setState({ error: true });
      this.props.setUpper(100); // Default to 100 if invalid input
    } else {
      this.setState({ error: false });
      this.props.setUpper(value);
    }
  };
}

export default EntryPoint;
