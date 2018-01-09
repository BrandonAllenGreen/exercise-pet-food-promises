'use strict';

const $ = require('jquery');



$.ajax({
  url: '../data/dogfood.json'
})
.done( (dogData) => {
  // loop thru 1st array
  console.log(dogData.dog_brands);
  dogData.dog_brands.forEach( (brand) => {
    console.log(brand);
    let $dogFood = $('#dogFood');
    $dogFood.append(`<h3>${brand.name}</h3>`);
    // loop thru each brand's types array
    brand.types.forEach( (brandType) => {
      $dogFood.append(`<h4>${brandType.type}</h4>`);
      // loop tru brandType's volumes array
      brandType.volumes.forEach( (vol) => {
        $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
      });
    });
   });
})
.fail( (error) => {
  console.log('Oops', error.statusText);
  
});
