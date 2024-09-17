import React, { Component } from 'react';
import ImgMediaCard2 from './card2';
import './style.css';
import { TextField } from '@material-ui/core';
import { getDetails } from './cardDetails';

class Cards extends Component {
  state = {
    cards: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ cards: getDetails() });
  }

  getData = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {/* Search Field */}
        <div className="search-bar">
          <TextField
            id="outlined-basic"
            label="Search Algorithms"
            variant="outlined"
            color="secondary"
            onChange={this.getData}
            style={{ width: '50%' }}
          />
        </div>

        {/* Cards Grid */}
        <div className="cards-container">
          {this.state.cards
            .filter(
              (card) =>
                card.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                card.description.toLowerCase().includes(this.state.filter.toLowerCase())
            )
            .map((card) => (
              <div key={card.id} className="card-wrapper">
                <ImgMediaCard2 card={card} />
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
