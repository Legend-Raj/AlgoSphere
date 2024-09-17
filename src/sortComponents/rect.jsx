import React, { Component } from 'react';
import './style.css';

class Rect extends Component {
  render() {
    return (
      <div
        className='rect'
        style={{
          height: this.props.rect.width,
          backgroundColor: this.checkColor(),
          margin: this.props.marg,
          verticalAlign: 'middle', // Use camelCase for style properties
        }}
      ></div>
    );
  }

  checkColor = () => {
    if (this.props.rect.isSorted) {
      return 'green';
    } else if (this.props.rect.isSorting) {
      return 'red';
    } else {
      return 'black';
    }
  };
}

export default Rect;
