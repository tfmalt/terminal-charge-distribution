import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from '../components/AppMenu';
import Footer from '../components/Footer';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import './AddNew.css';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: '',
      supplier: '',
      code: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('AddNew handleOnSubmit:', event);
    event.preventDefault();
  }

  handleChange(proxy, value) {
    const {nativeEvent} = proxy;
    const id = nativeEvent.target.id;

    console.log('AddNew handleChange event:', id, value);
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
            id="code"
            value={this.state.code.value}
            onChange={this.handleChange}
            floatingLabelText="Port code"
            fullWidth={true}
          />
          <div id="amount-container">
            <div id="amount-wrapper">
              <TextField
                id="amount"
                value={this.state.amount.value}
                onChange={this.handleChange}
                floatingLabelText="Amount"
                fullWidth={true}
              />
            </div>
            <div id="currency-wrapper">
              <TextField
                id="currency"
                style={{width: '6em'}}
                value={this.state.currency.value}
                onChange={this.handleChange}
                floatingLabelText="Currency"
                fullWidth={false}
              />
            </div>
          </div>
          <TextField
            id="supplier"
            value={this.state.supplier.value}
            onChange={this.handleChange}
            floatingLabelText="Supplier ID"
            fullWidth={true}
          />
          <div className="button-container">
            <RaisedButton
              type="submit"
              label="Submit"
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
