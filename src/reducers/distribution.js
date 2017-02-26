import {
  FETCHING_DISTRIBUTION,
  RECEIVED_DISTRIBUTION,
  COUNTRY_SELECTED
} from '../actions';

const defaultState = {
  selectedCountry: ''
};

export const distribution = (state = defaultState, action) => {
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
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedCountry: action.country
      };
    default:
      return state;
  }
};
