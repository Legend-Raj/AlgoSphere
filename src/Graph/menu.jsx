import React, { Component } from 'react';
import SimpleSelect from './simpleSelect';

class Menu extends Component {
  render() {
    return (
      <nav className="nav alert-dark" style={{ padding: '20px' }}>
        {/* Task Selector */}
        <div style={{ marginBottom: '20px' }}>
          <SimpleSelect
            pos={0}
            label="Task"
            items={['Fibonacci', 'Binomial Coefficient', 'Derangement', 'Bigmod', 'Stirling2']}
            onValueChanged={this.props.setAlgo}
          />
        </div>

        {/* N Selector */}
        <div style={{ marginBottom: '20px' }}>
          <SimpleSelect
            pos={0}
            label="N"
            items={[0, 1, 2, 3, 4, 5, 6]}
            onValueChanged={this.props.setN}
          />
        </div>

        {/* R Selector */}
        <div style={{ marginBottom: '20px' }}>
          <SimpleSelect
            pos={0}
            label="R"
            items={[0, 1, 2, 3, 4, 5, 6]}
            onValueChanged={this.props.setR}
          />
        </div>

        {/* Buttons */}
        <div className="btn-group mt-2">
          <button
            className="btn btn-lg btn-outline-primary m-2"
            onClick={this.props.onReset}
            disabled={this.props.disable}
            style={{ padding: '10px 20px', fontWeight: 'bold' }}
          >
            Reset
          </button>

          <button
            className="btn btn-lg btn-primary"
            onClick={this.props.onStart}
            disabled={this.props.disable}
            style={{ padding: '10px 20px', fontWeight: 'bold' }}
          >
            Visualize
          </button>
        </div>
      </nav>
    );
  }
}

export default Menu;
