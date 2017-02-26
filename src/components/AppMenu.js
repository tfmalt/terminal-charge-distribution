

import React, {Component, PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {setCurrentAppView} from '../actions';

class AppMenu extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleMenuTouchTap = this.handleMenuTouchTap.bind(this);
  }

  handleMenuTouchTap(event, menuitem) {
    const {value} = menuitem.props;
    const {dispatch} = this.props;

    console.log('AppMenu handleMenuTouchTap value', value);
    dispatch(setCurrentAppView(value));
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton iconStyle={{color: "white"}}>
            <NavigationMenu />
          </IconButton>
        }
        onItemTouchTap={this.handleMenuTouchTap}
      >
        <MenuItem primaryText="Distribution Chart" value="chart"/>
        <MenuItem primaryText="Add new rate" value="add"/>
      </IconMenu>
    );
  }
}

export default AppMenu;
