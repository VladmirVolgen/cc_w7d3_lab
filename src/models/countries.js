const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function () {
  this.countries = null;
}

Countries.prototype.bindEvent = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get(data => {
    this.countries = data;
    // console.log(this.countries);
    PubSub.publish('Countries:all', this.countryNames())
  })

  PubSub.subscribe('SelectView:selected', e => {
    // console.log(e.detail);
    // console.log(this.countryDetails(e.detail));
    PubSub.publish('Countries:country-details', this.countryDetails(e.detail))
  })
}

Countries.prototype.countryNames = function () {
  return this.countries.map(country => country.name);
}

Countries.prototype.countryDetails = function (index) {
  return this.countries[index]
}

module.exports = Countries;
