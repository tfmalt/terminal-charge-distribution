import React, {Component} from 'react';
import {version} from '../../package';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        thcd web frontend - version v{version}
      </div>
    );
  }
}

export default Footer;
