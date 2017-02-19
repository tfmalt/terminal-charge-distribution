import apis from '../services';

export const GET_RATES = 'GET_RATES';
export const GOT_RATES = 'GOT_RATES';

export const getRates = (bool) => {
  return {
    type:       GET_RATES,
    isFetching: bool
  };
};

export const gotRates = (rates) => {
  return {
    type: GOT_RATES,
    rates,
    receivedAt: Date.now()
  };
};

const fetchRates = () => (dispatch) => {
  dispatch(getRates(true));

  return apis.rates.then( (json) => {
    dispatch(gotRates(json));
  });
};

const shouldFetchRates = (state) => {
  if (!state.rates.items) {
    console.log('should fetch rates: no items');
    return true;
  }

  if (!(state.rates.items instanceof Array)) {
    console.log('should fetch rates: items not array');
    return true;
  }

  if (state.rates.items.length < 1) {
    console.log('should fetch rates: items is empty');
    return true;
  }

  if (state.isFetching) {
    console.log('should fetch rates: is already fetching');
    return false;
  }

  console.log('should fetch rates: default clause: false');
  return false;
};

export const fetchRatesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRates(getState())) {
    return dispatch(fetchRates());
  }
};
