import {
  FETCHING_COUNTRIES,
  RECEIVED_COUNTRIES
} from '../actions';

const defaultState = {
  countries: {
    isFetching: false,
    countries: {},
    lastUpdated: null
  }
};

export const countries = (state = defaultState, action) => {
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
