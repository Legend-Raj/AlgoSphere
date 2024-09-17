import React, { Component } from 'react';

class Details extends Component {
  details = [
    {
      algo: 0,
      content: [
        'The Fibonacci sequence, where each number is the sum of the two preceding ones, starts from 0 and 1. It models growth patterns in nature.',
        'N = The Nth Fibonacci Number',
        'Formula: Fib(n)',
        'Fib(0) = 0, Fib(1) = 1, Fib(n) = Fib(n-1) + Fib(n-2)',
      ],
    },
    {
      algo: 1,
      content: [
        'Binomial coefficients represent the positive integers in the binomial theorem, used in combinations and expansions of (1+x)^n.',
        'nCr = n! / (r! * (n-r)!)',
        'Formula: nCr(n, r)',
        'nCr(n, 0) = 1, nCr(n, n) = 1, nCr(n, r) = nCr(n-1, r-1) + nCr(n-1, r)',
      ],
    },
    {
      algo: 2,
      content: [
        'A derangement is a permutation where no element appears in its original position. It is often used in probability problems.',
        'N = The Nth Derangement',
        'Formula: der(n)',
        'der(0) = 1, der(1) = 0, der(n) = (n-1) * (der(n-1) + der(n-2))',
      ],
    },
    {
      algo: 3,
      content: [
        'Bigmod is a method for efficiently calculating large modular exponentiation, often used in cryptography.',
        'N = Number, P = Power',
        'Formula: bigmod(n, p)',
        'bigmod(a, 0) = 1, bigmod(n, p) = bigmod(n, p/2)^2; p even, bigmod(n, p) = bigmod(n, (p-1)/2)^2 * n; p odd',
      ],
    },
    {
      algo: 4,
      content: [
        'Stirling numbers of the second kind count the ways to partition a set of n objects into k non-empty subsets.',
        'N = Row, R = Column',
        'Formula: stir2(n, r)',
        'stir2(n, n) = 1, stir2(0, n) = 0, stir2(n, r) = stir2(n-1, r) * r + stir2(n-1, r-1)',
      ],
    },
  ];

  renderContent = (content) => {
    return content.map((text, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #dcdcdc',
          color: '#333',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '8px',
        }}
      >
        {text.split('\n').map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    ));
  };

  Switcher = () => {
    const detail = this.details.find((d) => d.algo === this.props.algo);
    return detail ? (
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '15px', backgroundColor: '#f0f8ff' }}>
        {this.renderContent(detail.content)}
      </div>
    ) : (
      <b style={{ color: 'red' }}>Content not available</b>
    );
  };

  render() {
    return <div>{this.Switcher()}</div>;
  }
}

export default Details;
