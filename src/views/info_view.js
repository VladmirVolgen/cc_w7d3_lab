const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const InfoView = function (element) {
  this.element = element;
}

InfoView.prototype.bindEvent = function () {
  PubSub.subscribe('Countries:country-details', e => {
    console.log(e.detail);
  })
}

module.exports = InfoView;

