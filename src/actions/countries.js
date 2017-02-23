
/**
 * Actions to deal with fetching and updating the countries data
 *
 * @author Thomas Malt <thomas@malt.no>
 * @license MIT
 */

import apis from '../services';

export const FETCHING_COUNTRIES = 'FETCHING_COUNTRIES';
export const RECEIVED_COUNTRIES = 'RECEIVED_COUNTRIES';

export const fetchingCountries = (bool) => {
  return {
    type:       FETCHING_COUNTRIES,
    isFetching: bool
  };
};

export const receivedCountries = (countries) => {
  return {
    type:       RECEIVED_COUNTRIES,
    receivedAt: Date.now(),
    countries
  };
};

const fetchCountries = () => (dispatch) => {
  dispatch(fetchingCountries(true));

  return apis.countries.then( (json) => {
    dispatch(receivedCountries(json.countries));
  });
};

const shouldFetchCountries = (state) => {
  if (state.countries.isFetching) {
    return false;
  }
  return true;
};

export const fetchCountriesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchCountries(getState())) {
    return dispatch(fetchCountries());
  }
};
