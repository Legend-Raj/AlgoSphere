import React, { Component } from 'react';
import SimpleSelect from './simpleSelect';

class Menu extends Component {
  render() {
    return (
      <nav className="nav alert-dark p-3" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Algorithm Selector */}
        <div style={{ marginRight: '20px' }}>
          <SimpleSelect
            onAlgoChanged={this.props.onAlgoChanged}
            items={this.props.algorithms}
            label="Algorithm"
          />
        </div>

        {/* Maze Selector */}
        <div style={{ marginRight: '20px' }}>
          <SimpleSelect
            onAlgoChanged={this.props.onMazeChanged}
            items={this.props.mazes}
            label="Maze"
          />
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button
            className="btn btn-lg btn-secondary m-2"
            onClick={this.props.onCreateMaze}
          >
            Create Maze
          </button>

          <button
            className="btn btn-lg btn-warning m-2"
            onClick={this.props.onVisualize}
          >
            Visualize
          </button>

          <button
            className="btn btn-lg btn-danger m-2"
            onClick={this.props.onClearPath}
          >
            Clear Path
          </button>

          <button
            className="btn btn-lg btn-danger m-2"
            onClick={this.props.onClearBoard}
          >
            Clear Board
          </button>
        </div>
      </nav>
    );
  }
}

export default Menu;
