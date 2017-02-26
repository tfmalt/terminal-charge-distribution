import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from '../components/AppMenu';
import Footer from '../components/Footer';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';

class AddNew extends Component {
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
        <div><TextField floatingLabelText="Enter port code" /></div>
        <div><TextField floatingLabelText="Enter amount" /></div>
        <div><TextField floatingLabelText="Currency" /></div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default connect((state) => (state))(AddNew);
