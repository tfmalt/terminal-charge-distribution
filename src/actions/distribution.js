/**
 * Actions to deal with fetching and updating the distribution data
 *
 * @author Thomas Malt <thomas@malt.no>
 * @license MIT
 */

import apis from '../services';

export const FETCHING_DISTRIBUTION = 'FETCHING_DISTRIBUTION';
export const RECEIVED_DISTRIBUTION = 'RECEIVED_DISTRIBUTION';
export const INVALIDATED_DISTRIBUTION = 'INVALIDATED_DISTRIBUTION';

export const fetchingDistribution = (country, bool) => {
  return {
    type: FETCHING_DISTRIBUTION,
    isFetching: bool,
    country
  };
};

export const receivedDistribution = (data) => {
  data.receivedAt = Date.now();
  data.type = RECEIVED_DISTRIBUTION;
  console.log('receivedDistribution: ', data);
  return data;
};

const fetchDistribution = (country) => (dispatch) => {
  dispatch(fetchingDistribution(country, true));

  return apis.distribution(country).then( (data) => {
    return {country, data};
  }).then( (data) => {
    dispatch(receivedDistribution(data));
  });
};

const shouldFetchDistribution = (country, state) => {
  console.log('shouldFetchDistribution:', country, state);
  if (!state.distribution.hasOwnProperty(country)) {
    return true;
  }
  if (state.distribution[country].isFetching) {
    return false;
  }

  return true;
};

export const fetchDistributionIfNeeded = (country) => (dispatch, getState) =>{
  if (shouldFetchDistribution(country, getState())) {
    return dispatch(fetchDistribution(country));
  }
};
