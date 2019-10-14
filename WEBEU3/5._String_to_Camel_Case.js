// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

// toCamelCase("the-stealth-warrior")
// // returns "theStealthWarrior"
// toCamelCase("The_stealth_warrior")
// // returns "TheStealthWarrior"


function toCamelCase(str) {
    // Check if the argument is an empty string.
    if (str === '') return str;
    // Defining the first element in the string to use for the loop.
    let snakeCase = str[0];
    // Split the string into characters in an array and set it equal to a variable. 
    strArr = str.split('');
    // Loop through the variable that should be an array now. We start from 1 because we took out the first index --> snakeCase.
    for (let i = 1; i < strArr.length; i++) {
      // If the loop stops on a '-' item, set the next item after '-' into an uppercase.
      if (strArr[i] === '-') {
        strArr[i + 1] = strArr[i + 1].toUpperCase();
      }
      // If the loop stops on a '_' item, set the next item after '_' into an uppercase.
      else if (strArr[i] === '_') {
        strArr[i + 1] = strArr[i + 1].toUpperCase();
      }
      // After these conditions, add the snakeCase variable (which should have the first index in str) to the modified strArr.
      else snakeCase += strArr[i];
    }
    //After the loop, return the changes.
    return snakeCase;
  }
  
  
  toCamelCase("The_Stealth_Warrior")