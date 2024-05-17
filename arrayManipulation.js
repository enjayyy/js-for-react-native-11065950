/*Create a JavaScript file named arrayManipulation.js.
• Write a function processArray that:
- Takes an array of numbers as an argument.
- Returns a new array where each even number is squared and each odd number
is tripled.*/

function processArray(arr) {
    return arr.map(function(num) {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }


  //example usage

 /* const inputArray = [1, 2, 3, 4, 5, 6];
  const resultArray = processArray(inputArray);
  console.log(resultArray);*/
