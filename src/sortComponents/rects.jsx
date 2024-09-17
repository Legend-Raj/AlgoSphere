import React, { Component } from 'react';
import Rect from './rect';
import FlipMove from 'react-flip-move';

class Rects extends Component {
  render() {
    const margin = this.props.rects.length > 50 ? 1 : 5;

    return (
      <div>
        <FlipMove
          className="d-flex justify-content-center align-items-end"
          duration={this.props.speed}
        >
          {this.props.rects.map((rect) => (
            <Rect marg={margin} key={rect.kk} rect={rect} />
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default Rects;
