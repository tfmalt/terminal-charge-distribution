import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import CountrySelect from '../components/CountrySelect';
import {connect} from 'react-redux';
// import {fetchRatesIfNeeded} from '../actions';
import '../App.css';

class App extends Component {
  static propTypes = {
    rates: PropTypes.object.isRequired,
    countries: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  /*
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchRatesIfNeeded());
  }
  */

  render() {
    return (
      <div className="Tcd">
        <AppBar
          title="Terminal Handling Charges"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div id="thcSearchBar">
          <CountrySelect
            dispatch={this.props.dispatch}
            countries={this.props.countries}
          />
        </div>
        <div id="distributionView">
          <div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
  // Destructuring the state object to create meaningful props.
  // const {rates, countries} = state;
  // return state;
// }

export default connect((state) => (state))(App);
