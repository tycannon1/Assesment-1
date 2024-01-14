// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let newArray = [];
  let i = 0; 
while (i < numbers.length) {
  if (numbers[i] > 10) {
    newArray.push(numbers[i]);
  }
  i += 1;
}
return newArray;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let newArray = [];
  for (let i = 0; i < words.length; i++)
  if (words[i].startsWith("b") || words[i].startsWith ("B")) {
    newArray.push(words[i]);
  }
  
return newArray;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  const ex = originalArray.concat(additionalItems);
  return ex;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length1) {
  let newArray = [];
  let i = 0; 
while (i < items.length) {
  if (items[i].length === length1) {
    newArray.push(items[i]);
  }
  i += 1;
}
return newArray;
// let result = items.filter((word) => word.length == length1)
// return result;

}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  
  let x = items.filter((element, index) => {
    return index % 2 === 0;
  })
  return x;
  
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  // let newArray = [];
  // for (let i = 0; i < words.length; i++)
  // return (words[i].startsWith(letter).index || words[i].startsWith (letter).index) 
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(letter)) {
      newArray.push(i)
    }
  }
  return newArray;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  items.sort((a, b) => b - a);
  let newArray = []
  for (let i = 0; i >= n; i++) {
  newArray.push(items[i])
  // newArray.split(0, n)
  ;
  }
return newArray;

}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  let newArray = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] = value) {
      newArray.push(i)
    } 
  }
  return newArray;
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
let newArray = []
for (let i = start; i <= stop; i++) {
  newArray.push(i)
}
return newArray;
  
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
