// Good morning! Write a function that takes in a string, 
// reverses the 'casing' of that string, and returns the "reversed-casing" string.

// const string = 'HELLO world!';
// console.log(reverseCase(string)); // <--- hello WORLD!



function reverseCase(str) {
    return str.split('').map(val => {
      return val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase();
    }).join('');
  }
  
  var string = 'HELLO world!';
  console.log(reverseCase(string)); // hello WORLD!
  