"use strict";


function wordsInCommon(words1, words2) {
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  const result = new Set();
  const word_list = [];

  for(const word of words1_set){
    if(words2_set.has(word)){
      result.add(word);
    }
  }

  for(const item of result) {
    word_list.push(item);
  }
  
  return word_list;
}


function kidsGame(names) {
  const output = [names.shift()];

  const first_letter_to_words = {};

  for(const name of names) {
    if(name[0] in first_letter_to_words) {
      first_letter_to_words[name[0]].push(name);
    }
    else {
      first_letter_to_words[name[0]] = [name];
    }
  }

  // let i = 0;
  // let word_length = output[0].length;
  // let start_letter = output[0][word_length -1];
  // let value_length = first_letter_to_words[start_letter].length;

  while(true){
    let start_word = output.slice(-1);
    let start_letter = output.slice(-1);

    console.log(first_letter_to_words.hasOwnProperty(start_letter));
    if(first_letter_to_words.hasOwnProperty(start_letter) === false){
      return output;
    }

    // word_length = output[i].length;
    // console.log(output, word_length);
    start_letter = output[i][word_length - 1];
    let word = first_letter_to_words[start_letter].shift();
    output.push(word);
  //  // console.log(first_letter_to_words[start_letter] != []);
  }

  return output;
}


const test = ['dell', 'language', 'function'];
const test2 = ['language', 'function', 'dog'];

const example = ['bagon', 'baltoy', 'yamask', 'starly', 'nosepass', 'kalob', 
                 'nicky', 'booger'];

console.log(wordsInCommon(test, test2));

console.log(kidsGame(example));