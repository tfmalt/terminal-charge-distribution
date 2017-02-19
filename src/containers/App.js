import React, {Component, PropTypes} from 'react';
import ItemTable from '../components/ItemTable';
import {connect} from 'react-redux';
import {fetchRatesIfNeeded} from '../actions';
import '../App.css';


class App extends Component {
  static propTypes = {
    isFetching:  PropTypes.bool.isRequired,
    items:       PropTypes.array.isRequired,
    lastUpdated: PropTypes.number,
    dispatch:    PropTypes.func.isRequired
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchRatesIfNeeded());
  }

  render() {
    return (
      <div className="Tcd">
        <div className="Tcd-header">
          <h2>Terminal Handling Charges Distribution</h2>
        </div>
        <div id="THCDItemList">
          <ItemTable items={this.props.items} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {rates} = state;
  const {isFetching, lastUpdated, items} = rates;
  return {
    isFetching,
    lastUpdated,
    items
  };
}

export default connect(mapStateToProps)(App);
