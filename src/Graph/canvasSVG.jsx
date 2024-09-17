import React, { Component } from 'react';
import Vertex from './vertex';
import Edge from './edge';

class CanvasSvg extends Component {
  constructor() {
    super();
    this.state = {
      pos: {
        x: 50,
        y: 10,
      },
    };
  }

  incrementXY = () => {
    this.setState((prevState) => ({
      pos: {
        ...prevState.pos,
        x: (prevState.pos.x + 50) % 240,
      },
    }));
  };

  renderEdges = () => {
    const { edges, offset } = this.props;
    return edges.map((edge, cellidx) => (
      <Edge
        key={`edge-${cellidx}`}
        id={cellidx}
        pos={{
          x1: (edge.x1 - offset) * 15 + 120,
          y1: edge.y1 * 15 + 10,
          x2: (edge.x2 - offset) * 15 + 120,
          y2: edge.y2 * 15 + 10,
        }}
      />
    ));
  };

  renderVertices = () => {
    const { vertices, offset, current } = this.props;
    return vertices.map((vertex, cellidx) => (
      <Vertex
        key={`vertex-${cellidx}`}
        id={cellidx}
        current={current === cellidx}
        label={vertex.label}
        ret={vertex.val}
        pos={{
          x: (vertex.x - offset) * 15 + 120,
          y: vertex.y * 15 + 10,
          px: (vertex.px - offset) * 15 + 120,
          py: vertex.py * 15 + 10,
        }}
      />
    ));
  };

  render() {
    return (
      <div>
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
          {this.renderEdges()}
          {this.renderVertices()}
        </svg>
      </div>
    );
  }
}

export default CanvasSvg;
