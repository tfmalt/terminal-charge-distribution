/**
 * Small test react app to first of all teach myself react+redux+thunk, second
 * of all as a repsonse to a coding challenge.
 *
 * @author Thomas Malt <thomas@malt.no>
 * @copyright 2017 (c) Thomas Malt
 * @license MIT
 */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';
import App from './containers/App';
import './index.css';

injectTapEventPlugin();

const middleware = [thunk];

// only adding logger when not running in production.
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);
