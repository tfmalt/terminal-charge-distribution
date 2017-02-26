import {
  FETCHING_RATES,
  RECEIVED_RATES
} from '../actions';

const defaultState = {
    isFetching: false,
    items: [],
    lastUpdated: null
}

export const rates = (state = defaultState, action) => {
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
