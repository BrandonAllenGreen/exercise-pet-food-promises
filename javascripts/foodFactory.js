'use strict';

const $ = require('jquery');
const _startCase = require('lodash.startcase');


module.exports.fetchDogFood = () => {
  return new Promise( (resolve, reject)=> {
  $.ajax({
    url: '../data/dogfood.json'
  })
  .done( (dogData) => {
    resolve(dogData);
  })
  .fail( (error) => {
    reject(error.statusText);
   });
});
};