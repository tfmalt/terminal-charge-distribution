import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {fetchCountriesIfNeeded, fetchDistributionIfNeeded} from '../actions';

class CountrySelect extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    countries: PropTypes.object.isRequired
  }

  state = {
    value: 'CN'
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    const {dispatch} = this.props;
    this.setState({value});
    dispatch(fetchDistributionIfNeeded(value));
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchCountriesIfNeeded());
    dispatch(fetchDistributionIfNeeded('CN'));
  }

  render() {
    let ctr = this.props.countries.countries;
    return (
      <SelectField
        floatingLabelText="Enter country"
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
