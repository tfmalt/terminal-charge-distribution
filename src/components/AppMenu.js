

import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class AppMenu extends Component {
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
        <MenuItem href="/#/" primaryText="Distribution Chart" value="chart" />
        <MenuItem href="/#/add" primaryText="Add new rate" value="add" />
      </IconMenu>
    );
  }
}

export default AppMenu;
