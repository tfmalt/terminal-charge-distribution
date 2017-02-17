import React, { Component } from 'react';
import ItemTable from './ItemTable';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Tcd">
        <div className="Tcd-header">
          <h2>Terminal Handling Charges Distribution</h2>
        </div>
        <div id="THCDItemList">
          <ItemTable />
        </div>
      </div>
    );
  }
}

export default App;
