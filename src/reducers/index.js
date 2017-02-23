import {combineReducers} from 'redux';
import {
  FETCHING_RATES,
  RECEIVED_RATES,
  FETCHING_COUNTRIES,
  RECEIVED_COUNTRIES,
  FETCHING_DISTRIBUTION,
  RECEIVED_DISTRIBUTION
} from '../actions';

const defaultState = {
  rates: {
    isFetching: false,
    items: [],
    lastUpdated: null
  },
  countries: {
    isFetching: false,
    countries: {},
    lastUpdated: null
  },
  distribution: {}
};

const rates = (state = defaultState.rates, action) => {
  switch (action.type) {
    case FETCHING_RATES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVED_RATES:
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

const countries = (state = defaultState.countries, action) => {
  switch (action.type) {
    case FETCHING_COUNTRIES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVED_COUNTRIES:
      return {
        ...state,
        isFetching: false,
        countries: action.countries,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const distribution = (state = defaultState.distribution, action) => {
  switch (action.type) {
    case FETCHING_DISTRIBUTION:
      let stuff = {...state};
      stuff[action.country] = {isFetching: action.isFetching};
      return stuff;
    case RECEIVED_DISTRIBUTION:
      let data = {...state};

      data[action.country] = {
        data: action.data,
        lastUpdated: action.receivedAt,
        isFetching: false
      }

      return data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  rates, countries, distribution
});

export default rootReducer;
