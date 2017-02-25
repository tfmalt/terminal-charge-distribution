import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({
    countries: {
      isFetching: true
    }
  });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div
  );
});
