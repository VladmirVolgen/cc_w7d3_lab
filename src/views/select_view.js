const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvent = function() {
  PubSub.subscribe('Countries:all', e => {
    // console.log(e.detail);
    e.detail.forEach((country, index) => {
      let option = createAndAppend('option', country, this.element);
      option.value = index;
    })
  })
}


module.exports = SelectView;
