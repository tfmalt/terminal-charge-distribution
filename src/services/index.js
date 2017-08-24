/**
 * Collection for handling all the API endpoints in one place
 *
 * @author Thomas Malt <thomas@malt.no>
 * @license MIT
 */
import 'whatwg-fetch';

const urlRoot = 'https://api.malt.no/thcd';

// console.log('Loading src/services: apikey:', process.env.REACT_APP_THCD_API_KEY);

/**
 * Object literal helper collecting all web service API's
 */
const apis = {
  url: {
    rates:     `${urlRoot}/terminal/rates.json`,
    countries: `${urlRoot}/rates/countries`,
    postnew:   `${urlRoot}/rates/add`
  },

  /**
   * Function for posting a new rate to the server.
   *
   * @param {object} data The json object to post
   * @return {Promise} A promise with the result is returned.
   */
  postNewRate(data) {
    return fetch(this.url.postnew, {
      method:  'POST',
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
        'apikey': 'a734c12090904aeba2e65919f5d52b48'
      },
      body: JSON.stringify(data)
    }).then( (res) => {
      if (res.ok) {
        return res.json();
      }
    }).then( (body) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('Got result from posting data:', body);
      }
    }).catch( (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('apis postNewRate got error from service:', error);
      }
    });
  },

  /**
   * Using fetch to get all the rates.
   */
  get rates() {
    return fetch(this.url.rates, {
      method: 'GET',
      headers: {
        'apikey': 'a734c12090904aeba2e65919f5d52b48'
      }
    })
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
  },

  get countries() {
    return fetch(this.url.countries, {
      method: 'GET',
      headers: {
        'apikey': 'a734c12090904aeba2e65919f5d52b48'
      }
    }).then( (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Got response but response was not ok.');
    }).catch( (error) => {
      console.error('Caught error fetching countries:', error);
    });
  },

  distribution(country) {
    console.log('API distribution:', country);
    return fetch(`${urlRoot}/rates/${country}/distribution`, {
      method: 'GET',
      headers: {
        'apikey': 'a734c12090904aeba2e65919f5d52b48'
      }
    }).then( (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Got response but response was not ok');
    });
  }
};

export default apis;
