// Good morning! For today's code challenge, we're not going to write any functions. 
// We'll be writing for-loops and console.log()'s. 
// There are also a couple "self-study" questions for you.

// Press the "run" button. Initially, your console will look like this:
// ********** Exercise 1 of 4 **********

// ********** Exercise 2 of 4 **********

// ********** Exercise 3 of 4 **********

// ********** Exercise 4 of 4 **********

// As you work on the exercises, you can use either the "run" button to evaluate your code, 
// or use the "run tests" button to compare your output to the expected results.

// Please submit your work as soon as you have completed the assignment. 
// If you don't finish all of the assignment, that's okay! We do want to see what you came up with by 8:45am PST.


console.log('********** Exercise 1 of 4 **********');
const unimaginativeArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the "zeroeth"
// value in the unimaginitiveArray, and thereafter every
// third value of the unimaginativeArray, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
// What is "zeroeth"? Has the word "first" become
// ambiguous now that I am a computer scientist? (Hint: yes).

for (let i = 0; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
};


console.log('\n********** Exercise 2 of 4 **********');
const nameArray = [ 'Jacquelynn', 'Csaba', 'Ellen', 'Moises', 'Cole', 'Jeff', 'Dre\'Sean' ];
// Write a console.log() that displays the last value in
// nameArray. Use the `.length` property of array's
// to access the last value. What's going on with that
// slash in Dre'Sean's name?

console.log(nameArray[nameArray.length - 1]);

console.log('\n********** Exercise 3 of 4 **********');
const adjectiveArray = [ 'awesome', 'fantastic', 'amazing', 'wonderful', 'fabulous', 'incredible', 'marvelous' ];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Use the string "is"
// to combine the name with the adjective. For example:
// "Jacquelynn is awesome"
// "Csaba is fantastic" et cetera...

for (let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i], "is", adjectiveArray[i]);
}

console.log('\n********** Exercise 4 of 4 **********');
// Write a "for" loop that console.log()'s every third
// number in unimaginativeArray but initialize the
// iterator so it doesn't console.log() the zero.

for (let i = 3; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
}


/* SELF-STUDY QUESTION
1. What do you think is going on with those slashes in the strings?
2. What does the \n do in the Exercise titles?
3. What does the \ do in Dre'Sean's name?

Search the internet for "JS String" or "MDN String" and write a
brief answer below. MDN is the acronym for the Mozilla Developer
Network. They've got great documentation for JavaScript!

Write your answers in here:
1. Escape notation
per: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
2. \n makes a "new line"

3. Within a string which has opening and closing single quotes, the escape slash let's us add a single quote within the string.

 */



