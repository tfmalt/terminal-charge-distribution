export const GET_RATES = 'GET_RATES';
export const GOT_RATES = 'GOT_RATES';

export const getRates = (url) => ({
  type: GET_RATES,
  url
});

export const gotRates = (rates) => ({
  type: GOT_RATES,
  rates
});
