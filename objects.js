"use strict";


// 1. countWords
function countWords(phrase) {
  let word_counts = {};

  for(const word of phrase.split(' ')){
    if(word in word_counts){
      word_counts[word] += 1;
    }
    else{
      word_counts[word] = 1;
    }
  }

  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}



const test = 'hello bye hello bye morning';
console.log(countWords(test));