"use strict";


// 1. isHometown

// function isHometown(town){
//   return town === 'San Francisco';
// }

const isHometown = (town) => town === 'San Francisco';

// 2. getFullName

const getFullName = (first_name, last_name) => `${first_name} ${last_name}`;


// 3. calculateTotal

function calculateTotal(base_price, state, tax = 0.05){
  let subtotal = base_price * (1 + tax);
  let fee = 0;
  if( state === 'CA'){
    fee = 0.03* subtotal;
  }
  else if (state === 'PA'){
    fee = 2;
  }
  else if(state === 'MA'){
    if(base_price <= 100){
      fee = 1;
    }
    else{
      fee = 3;
    }
  }
  return subtotal+fee;
}


// isHometown('San Francisco');

// getFullName('Liz', 'Bruder');

getFullName('Hi', 'Bye');

//isHometown('San Francisco');
