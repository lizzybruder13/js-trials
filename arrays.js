"use strict";


// 1. printIndices
function printIndices(items) {
  for (let i = 0; i<items.length; i++){
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {

  let result = [];

  for (let i = 0; i<items.length; i+=2){
    result.push(items[i]);
  }

  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  let items_sorted = items.sort((a, b) => a - b);

  items_sorted = items_sorted.slice(0, n);

  items_sorted = items_sorted.reverse();

  console.log(items_sorted);
}

smallestNItems([5,2,1,3,4], 3);
