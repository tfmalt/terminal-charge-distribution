import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import CountrySelect from '../components/CountrySelect';
import DistributionChart from '../components/DistributionChart';
import AppMenu from '../components/AppMenu';
import Footer from '../components/Footer';
import {fetchCountriesIfNeeded} from '../actions';
import {connect} from 'react-redux';

// import {fetchRatesIfNeeded} from '../actions';
import './App.css';

class App extends Component {
  static propTypes = {
    rates: PropTypes.object.isRequired,
    countries: PropTypes.object.isRequired,
    distribution: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchCountriesIfNeeded());
  }

  render() {
    return (
      <div className="thcd">
        <div id="theAppBar">
          <AppBar
            title="Charge Distribution"
            iconElementLeft={<AppMenu />}
          />
        </div>
        <div id="thcSearchBar">
          <CountrySelect
            dispatch={this.props.dispatch}
            countries={this.props.countries}
          />
        </div>
        <div id="distributionView">
          <DistributionChart
            dispatch={this.props.dispatch}
            distribution={this.props.distribution}
          />
        </div>
        <Footer />
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
