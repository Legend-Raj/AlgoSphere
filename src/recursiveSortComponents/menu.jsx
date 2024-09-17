import React, { Component } from 'react';
import DiscreteSlider from './slider';
import SimpleSelect from './simpleSelect';
import RangeSlider from './doubleSlider';

class Menu extends Component {
  render() {
    return (
      <nav className="nav alert-light p-3" style={{ backgroundColor: '#f7f9fc', color: '#333' }}>
        {/* Randomize Button */}
        <button
          className="btn btn-success m-2"  // Light green for randomization
          onClick={this.props.onRandomize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Randomize
        </button>

        {/* Range Slider */}
        <RangeSlider disable={this.props.disable} />

        {/* Number Slider */}
        <DiscreteSlider
          default={20}
          min={10}
          max={100}
          step={10}
          title="Numbers"
          onCountChange={this.props.onCountChange}
          disable={this.props.disable}
        />

        {/* Speed Slider */}
        <DiscreteSlider
          default={50}
          min={10}
          max={100}
          step={1}
          title="Speed"
          onCountChange={this.props.onSpeedChange}
          disable={false}
        />

        {/* Algorithm Selector */}
        <SimpleSelect pos={0} onAlgoChanged={this.props.onAlgoChanged} />

        {/* Visualize Button */}
        <button
          className="btn btn-warning btn-lg m-2" // Orange for visualization
          onClick={this.props.onViusalize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Visualize
        </button>
      </nav>
    );
  }

  isClickable = () => {
    return this.props.disable ? { cursor: 'not-allowed', opacity: 0.7 } : {};
  };
}

export default Menu;
