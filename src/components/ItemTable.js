import React, {Component} from 'react';
import apis from './services';
import 'whatwg-fetch';

class PortRow extends Component {
  render() {
    let port = this.props.port;

    return (
      <tr>
        <td>{port.port}</td>
        <td>{port.currency}</td>
        <td>{port.value}</td>
      </tr>
    );
  }
}

class ItemTable extends Component {
  render() {
    apis.rates.then((list) => {
      let rates = list.map((item) => {
        return (<PortRow port={item} key={item.port}/>);
      });
      return rates;
    }).then((rates) => {
      return (
        <table>
          <tbody>
            {rates}
          </tbody>
        </table>
      );
    });
  }
}

export default ItemTable;
