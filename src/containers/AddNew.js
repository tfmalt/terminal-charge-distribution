import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenu from '../components/AppMenu';
import {connect} from 'react-redux';

class AddNew extends Component {
  render() {
    return (
      <div id="theAppBar">
        <AppBar
          title="Add new rate item"
          iconElementLeft={<AppMenu />}
        />
      </div>
    );
  }
}

export default connect((state) => (state))(AddNew);
