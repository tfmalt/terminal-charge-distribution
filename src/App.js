import React, {Component} from 'react';
import 'whatwg-fetch';
import './App.css';

fetch('https://api.malt.no/terminal/rates.json').then((response) => {
  console.log("status:", response.status);
  console.log("response: ", response.headers.get("Content-Type"));
  return response.json();
}).then((json) => {
  const list = json.map((item) => {
    <li>{item.supplier_id + ' - ' + item.port + ' - ' + item.value}</li>
  });
});

class ItemList extends Component {
  render() {
    return (
      <ul>
        <li>Yet another test</li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="Tcd">
        <div className="Tcd-header">
          <h2>Terminal Handling Charges Distribution</h2>
        </div>
        <div id="THCDItemList">
          <ItemList />
        </div>
      </div>
    );
  }
}

export default App;
