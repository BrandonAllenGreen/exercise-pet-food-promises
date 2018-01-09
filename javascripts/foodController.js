'use strict';

let test = require ('./foodFactory');
let foodView = require('./foodView');

module.exports.outputfood = () => {
  test.fetchDogFood()
  .then( (dogData) => {
    console.log('dogData', dogData);
    foodView.displayFood(dogData.dog_brands);
    
  });
};