import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import CountrySelect from '../components/CountrySelect';
import DistributionChart from '../components/DistributionChart';
import AppMenu from '../components/AppMenu';
import {fetchCountriesIfNeeded} from '../actions';
import {connect} from 'react-redux';
import {version} from '../../package';

// import {fetchRatesIfNeeded} from '../actions';
import './App.css';

class App extends Component {
  static propTypes = {
    rates: PropTypes.object.isRequired,
    countries: PropTypes.object.isRequired,
    distribution: PropTypes.object.isRequired,
    appmenu: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    whichView: 'chart'
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchCountriesIfNeeded());
  }

  render() {
    const {appmenu} = this.props;
    console.log('App told to render:', appmenu);

    const header = (
      <div id="theAppBar">
        <AppBar
          title="Charge Distribution"
          iconElementLeft={<AppMenu dispatch={this.props.dispatch} />}
        />
      </div>
    );

    const searchBar = (
      <div id="thcSearchBar">
        <CountrySelect
          dispatch={this.props.dispatch}
          countries={this.props.countries}
        />
      </div>
    );

    const addView = (
      <div id="addView" style={{margin: "0px 12px"}} >
        <TextField floatingLabelText="Enter port code" />
        <TextField floatingLabelText="Enter amount" />
        <TextField floatingLabelText="Currency" />
      </div>
    );

    let currentView = [];
    if (appmenu.currentView === 'chart') {
      currentView = [
        searchBar, (
          <div id="distributionView">
            <DistributionChart
              dispatch={this.props.dispatch}
              distribution={this.props.distribution}
            />
          </div>
        )];
    }
    else if (appmenu.currentView === 'add') {
      currentView = addView;
    }

    return (
      <div className="thcd">
        {header}
        <div id="theView">
          {currentView}
        </div>
        <div id="footer">
          thcd web frontend - version v{version}
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
