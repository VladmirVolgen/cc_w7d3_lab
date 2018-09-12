const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const InfoView = function (element) {
  this.element = element;
}

InfoView.prototype.bindEvent = function () {
  PubSub.subscribe('Countries:country-details', e => {
    // console.log(e.detail);
    this.render(e.detail);
  })
}

InfoView.prototype.render = function (country) {
  this.element.innerHTML = '';
  createAndAppend('h2', country.name, this.element);
  const flag = createAndAppend('img', '', this.element);
  flag.src = country.flag;
  createAndAppend('h3', 'Region:', this.element);
  createAndAppend('p', country.region, this.element);
  createAndAppend('h3', 'Languages:', this.element);
  const list = createAndAppend('ul', '', this.element);
  country.languages.forEach(language => {
    createAndAppend('li', language.name, list);
  })
}

module.exports = InfoView;

