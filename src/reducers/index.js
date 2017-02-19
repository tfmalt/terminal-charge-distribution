import {combineReducers} from 'redux';
import {GET_RATES, GOT_RATES} from '../actions';

const defaultState = {
  isFetching: false,
  items: [],
  lastUpdated: null
};

const rates = (state = defaultState, action) => {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        isFetching: true
      };
    case GOT_RATES:
      return {
        ...state,
        isFetching: false,
        items: action.rates,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

// introducted combineReducers here to learn, even though I don't yet need them.
const rootReducer = combineReducers({
  rates
});

export default rootReducer;
