import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from '../components/AppMenu';
import Footer from '../components/Footer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {submitNewRate} from '../actions';
import {connect} from 'react-redux';
import './AddNew.css';

class AddNew extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      amount:   {
        value:     '',
        errorText: ''
      },
      currency: {
        value:     '',
        errorText: ''
      },
      supplier: {
        value:     '',
        errorText: ''
      },
      port:     {
        value:     '',
        errorText: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const {dispatch} = this.props;

    console.log('AddNew handleOnSubmit:', event);
    dispatch(submitNewRate(this.state));
    event.preventDefault();
    return false;
  }

  handleChange(event, value) {
    const id = event.target.id;

    let state = this.state;
    if (id === 'port' && typeof value === 'string') {
      value = value.toUpperCase();
      if (value.length > 5) {
        state[id].errorText = 'Must be 5 letters';
      } else if (value.match(/[^A-Z]/)) {
        state[id].errorText = 'Only letters A-Z';
      } else {
        state[id].errorText = '';
      }
    }

    if (id === 'amount') {
      if (value.match(/[^0-9\.]/)) {
        state[id].errorText = 'Only numbers and .';
      } else {
        state[id].errorText = '';
      }
    }

    state[id].value = value;
    this.setState(state);

    console.log('AddNew handleChange event:', state);
  }

  componentDidMount() {
    console.log('AddNew componentDidMount');
  }

  render() {
    return (
      <div className="thcd">
      <div id="theAppBar">
        <AppBar
          title="Add new rate item"
          iconElementLeft={<AppMenu />}
        />
      </div>
      <div id="addView">
        <form id="addNewForm" onSubmit={this.handleSubmit}>
          <TextField
            id="port"
            value={this.state.port.value}
            onChange={this.handleChange}
            floatingLabelText="Port code"
            errorText={this.state.port.errorText}
            fullWidth={true}
          />
          <div id="amount-container">
            <div id="currency-wrapper">
              <TextField
                id="currency"
                style={{width: '100%'}}
                value={this.state.currency.value}
                onChange={this.handleChange}
                floatingLabelText="Currency"
                fullWidth={false}
              />
            </div>
            <div id="amount-wrapper">
              <TextField
                id="amount"
                value={this.state.amount.value}
                onChange={this.handleChange}
                floatingLabelText="Amount"
                errorText={this.state.amount.errorText}
                fullWidth={true}
              />
            </div>
          </div>
          <TextField
            id="supplier"
            value={this.state.supplier.value}
            onChange={this.handleChange}
            floatingLabelText="Supplier ID"
            errorText={this.state.supplier.errorText}
            fullWidth={true}
          />
          <div className="button-container">
            <RaisedButton
              type="submit"
              label="Submit"
              style={{height: 46}}
              secondary={true}
              fullWidth={true} />
          </div>
        </form>
      </div>
      <Footer />
    </div>
    );
  }
}

export default connect((state) => (state))(AddNew);
