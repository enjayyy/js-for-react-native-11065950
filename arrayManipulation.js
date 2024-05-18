/*Create a JavaScript file named arrayManipulation.js.
• Write a function processArray that:
- Takes an array of numbers as an argument.
- Returns a new array where each even number is squared and each odd number
is tripled.*/

export {strings,formatArrayStrings} 

function processArray(arr) {
    return arr.map(function(num) {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }

 
  function formatArrayStrings(strings, arr){
    if (strings.length!== arr.length){
        console.log("Arrays should be of the same length");
    }

    for (i=0; i < strings.length; i++){
        if (arr[i] % 2==0){
            strings[i]= strings[i].toUpperCase();
        }else{
            strings[i]= strings[i].toLowerCase();
        }
    }
    return strings;
  }

  //usage
  const strings = ["Hello", "WORLD", "JavaScript"];
  const arr = [2, 5, 4];
  const formattedStrings = formatArrayStrings(strings, arr);
  console.log(formattedStrings); 

