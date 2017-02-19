import React, {Component, PropTypes} from 'react';
import 'whatwg-fetch';

class PortRow extends Component {
  static propTypes = {
    port: PropTypes.object.isRequired
  }

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
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    console.log('item table props: ', this.props);
    return (
      <table>
        <thead>
          <tr>
            <th>Port</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map( (item, index) => (
              <PortRow port={item} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ItemTable;
