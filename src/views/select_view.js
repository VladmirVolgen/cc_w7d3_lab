const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvent = function() {
  PubSub.subscribe('Countries:all', e => {
    console.log(e.detail);
  })
}


module.exports = SelectView;
