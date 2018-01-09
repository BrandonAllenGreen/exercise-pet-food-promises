'use strict';

const $ = require('jquery');
const _startCase = require('lodash.startcase');

module.exports.displayFood = (dogData) => {
  console.log(dogData);
  // loop thru 1st array
dogData.forEach( (brand) => {
  console.log(brand);
  let $dogFood = $('#dogFood');
  $dogFood.append(`<h3>${_startCase(brand.name)}</h3>`);
  // loop thru each brand's types array
  brand.types.forEach( (brandType) => {
    $dogFood.append(`<h4>${_startCase(brandType.type)}</h4>`);
    // loop tru brandType's volumes array
    brandType.volumes.forEach( (vol) => {
      $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
    });
  });
});
};
