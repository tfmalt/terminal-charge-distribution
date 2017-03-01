import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  fetchDistributionIfNeeded,
  setSelectedCountry
} from '../actions';

class CountrySelect extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    countries: PropTypes.object.isRequired
  }

  state = {
    value: ''
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    const {dispatch} = this.props;
    this.setState({value});
    dispatch(fetchDistributionIfNeeded(value));
    dispatch(setSelectedCountry(value));
  }

  componentWillReceiveProps(nextProps) {
    const {countries} = nextProps;
    this.setCountryOnInitialRender(countries.countries);
  }

  setCountryOnInitialRender(countryObj) {
    const {dispatch} = this.props;

    if (this.state.value === '' && Object.keys(countryObj).length > 0) {
      let country = Object.keys(countryObj)[0];
      this.setState({value: country});
      dispatch(setSelectedCountry(country));
      dispatch(fetchDistributionIfNeeded(country));
    }
  }

  render() {
    let ctr = this.props.countries.countries;
    return (
      <SelectField
        floatingLabelText="Select country"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {Object.keys(ctr).map( (key) => {
          return (
            <MenuItem
              key={key}
              value={key}
              primaryText={ctr[key]}
              secondaryText={key}
            />
          );
        })}
      </SelectField>
    );
  }
}

export default CountrySelect;
