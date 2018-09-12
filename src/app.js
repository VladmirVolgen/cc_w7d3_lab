const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  countries = new Countries;
  countries.bindEvent();

  const dropDown = document.querySelector('#countries');
  selectView = new SelectView(dropDown);
  selectView.bindEvent();

  const div = document.querySelector('#country');
  const infoView = new InfoView(div);
  infoView.bindEvent();
});
