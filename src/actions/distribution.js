/**
 * Actions to deal with fetching and updating the distribution data
 *
 * @author Thomas Malt <thomas@malt.no>
 * @license MIT
 */

import apis from '../services';

export const FETCHING_DISTRIBUTION    = 'FETCHING_DISTRIBUTION';
export const RECEIVED_DISTRIBUTION    = 'RECEIVED_DISTRIBUTION';
export const INVALIDATED_DISTRIBUTION = 'INVALIDATED_DISTRIBUTION';
export const COUNTRY_SELECTED         = 'COUNTRY_SELECTED';

export const fetchingDistribution = (country, bool) => {
  return {
    type:       FETCHING_DISTRIBUTION,
    isFetching: bool,
    country
  };
};

export const receivedDistribution = (data) => {
  data.receivedAt = Date.now();
  data.type = RECEIVED_DISTRIBUTION;
  return data;
};

export const setSelectedCountry = (country) => {
  console.log('setSelectedCountry:', country);
  return {
    type: COUNTRY_SELECTED,
    country
  }
}

const fetchDistribution = (country) => (dispatch) => {
  dispatch(fetchingDistribution(country, true));

  return apis.distribution(country).then( (data) => {
    return {country, data};
  }).then( (data) => {
    dispatch(receivedDistribution(data));
  });
};

const shouldFetchDistribution = (country, state) => {
  if (state.distribution.hasOwnProperty(country) === false) {
    return true;
  }
  if (state.distribution[country].isFetching) {
    return false;
  }

  // proof of concept test if age is less than an hour keep data
  let maxAge = state.distribution[country].lastUpdated + 3600000;
  if (maxAge > Date.now()) {
    console.log(`have fresh data for ${country} - ${maxAge - Date.now()} left - returning false`);
    return false;
  }

  return true;
};

export const fetchDistributionIfNeeded = (country) => (dispatch, getState) =>{
  if (shouldFetchDistribution(country, getState())) {
    return dispatch(fetchDistribution(country));
  }
};
