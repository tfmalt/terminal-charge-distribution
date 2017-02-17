/**
 * First attempts at writing a react component.
 */
import React, {Component} from 'react';
import 'whatwg-fetch';

class PortRow extends Component {
  render() {
    let port;
    return <li>foo</li>;
  }
}

class ItemTable extends Component {
  render() {
    let rates = fetch('https://api.malt.no/terminal/rates.json').then((response) => {
      console.log(
        'got data:', response.status,
        ' - ', response.headers.get('Content-Type')
      );
      return response.json();
    }).then( (json) => {
      return json.map( (item) => {
        return <PortRow port={item} />
      });
    });

    return (
      <table>
        <tbody>
        {rates}
      </tbody>
      </table>
    );
  }
}

export default ItemTable;
