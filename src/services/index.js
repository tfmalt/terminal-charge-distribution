import 'whatwg-fetch';

/**
 * Object literal helper collecting all web service API's
 */
const apis = {
  ratesUrl:  'https://api.malt.no/terminal/rates.json',
  ratesData: null,

  /**
   * Using fetch to get all the rates.
   */
  get rates() {
    if (this.ratesData instanceof Array) {
      console.log('Found existing rates data:', this.ratesData[0]);
      return this.ratesData;
    }

    return fetch(this.ratesUrl)
      .then( (response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Got response but response was not ok');
      })
      .then( (items) => {
        this.ratesData = items;
        return items;
      })
      .catch( (error) => {
        console.error('Caught error fetching rates:', error);
      });
  }
};

export default apis;
