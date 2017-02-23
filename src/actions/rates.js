/**
 * Actions to deal with fetching and updating the raw rates data
 *
 * @author Thomas Malt <thomas@malt.no>
 * @license MIT
 */

import apis from '../services';

export const FETCHING_RATES = 'FETCHING_RATES';
export const RECEIVED_RATES = 'RECEIVED_RATES';

export const fetchingRates = (bool) => {
  return {
    type:       FETCHING_RATES,
    isFetching: bool
  };
};

export const receivedRates = (rates) => {
  return {
    type:       RECEIVED_RATES,
    receivedAt: Date.now(),
    rates
  };
};

const fetchRates = () => (dispatch) => {
  dispatch(fetchingRates(true));

  return apis.rates.then( (json) => {
    dispatch(receivedRates(json));
  });
};

const shouldFetchRates = (state) => {
  if (state.rates.items.length > 1 || state.rates.isFetching) {
    return false;
  }
  return true;
};

export const fetchRatesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRates(getState())) {
    return dispatch(fetchRates());
  }
};
