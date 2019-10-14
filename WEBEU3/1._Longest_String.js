// Good morning! Write a function that takes an array of strings and return the longest string in the array.

// For example:
// const strings1 = ['short', 'really, really long!', 'medium'];
// console.log(longestString(strings1)); // <--- 'really, really long!'

// Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

// For example:
// const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
// console.log(longestString(strings2)); // <--- 'first long string!'

// -------------LONGEST STRING--------------------- //

// Good morning! Write a function that takes an array of strings and return the longest string in the array.

// For example:
// const strings1 = ['short', 'really, really long!', 'medium'];
// console.log(longestString(strings1)); // <--- 'really, really long!'

// Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

// For example:
// const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
// console.log(longestString(strings2)); // <--- 'first long string!'

//+++Function
function longestString(arr) {
    // define output variable
    let longString = ''; 
    // create loop of array
    for (let i = 0; i < arr.length; i++) {
      // create if statement
      if (arr[i].length > longString.length) {
        longString = arr[i]; 
      }
    }
    // return output variable
    return longString; 
  }

// ++ Tests
const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string!'

// ++ Model Solution

function longestString(arr) {
	let result = '';
	for(let index = 0; index < arr.length; index++) {
	  let currentItem = arr[index];
		if(currentItem.length > result.length) {
			result = arr[index];
		}
	}
	return result;
}


// ++ Practice
  function longestString(arr) {
    let longString = '';
    for (let i=0, i < arr.length; i++) {
      if (arr[i].length > longString.length) {
          longString = arr[i];
      }
    }
    return longString;
  }

  function longestString(arr) {
      let longString = '';
      for (let i=0, i < arr.length; i++) {
          if (arr[i].length > longString.length) {
              longString = arr[i];
          }
      }
  }

  function longestString(arr) {
      let longString = '';
      for (let i = 0, i > longestString.length; i++) {
          if (arr[i].length > longString.length) {
              longString = arr[i]
          }
      }
      return longString;
  }