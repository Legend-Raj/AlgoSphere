import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class TextFields extends Component {
  state = {
    value: '',
    error: false,
    helperText: ''
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value < 0) {
      this.setState({
        error: true,
        helperText: 'Please enter a valid number',
      });
    } else {
      this.setState({
        value: value,
        error: false,
        helperText: '',
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          error={this.state.error}
          label="Upper Number"
          type="number"
          variant="outlined"
          helperText={this.state.helperText}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextFields;
