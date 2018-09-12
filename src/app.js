const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  countries = new Countries;
  countries.bindEvent();

  const dropDown = document.querySelector('#countries');
  selectView = new SelectView(dropDown);
  selectView.bindEvent();
});
