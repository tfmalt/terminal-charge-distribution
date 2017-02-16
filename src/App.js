import React, { Component } from 'react';
import './App.css';

fetch('https://api.malt.no/terminal/rates.json')
    .then( (response) => {
      console.log("response:", response.body);
    });

class Tcd extends Component {
  render() {
    return (
      <div className="Tcd">
        <div className="Tcd-header">
          <h2>Terminal Container Charge Distribution</h2>
        </div>
        <p className="App-intro">
            Let's start to see some code here.
        </p>
      </div>
    );
  }
}

export default Tcd;
