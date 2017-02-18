/**
 * Object literal helper collecting all web service API's
 */
const apis = {
  ratesUrl: 'https://api.malt.no/terminal/rates.json',
  ratesData: null,

  /**
   * Using fetch to get all the rates.
   */
  get rates() {
    console.log("running fetch rates");
    if (this.ratesData instanceof Array) {
      console.log("Found existing rates data:", this.ratesData[0]);
      return this.ratesData;
    }

    return fetch(this.ratesUrl)
      .then( (response) => {
        console.log("got response from fetch: ", response.ok);
        if (response.ok) {
          this.ratesData = response.json();
          console.log("type of data: ", typeof this.ratesData);
          console.log("is array?:", this.ratesData.toString());
          return this.ratesData;
        }

        throw new Error('Got response but response was not ok');
      })
      .catch( (error) => {
        console.error('Caught error fetching rates:', error);
      });
  }
};

export default apis;
