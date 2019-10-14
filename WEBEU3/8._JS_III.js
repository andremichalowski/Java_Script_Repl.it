// Instructions from your teacher:
// Good morning! You have an array full of objects detailing information about pets: name, species and age. Let's write a function which iterates through each object, looks for all the pets of a particular species, converts each of those pets' ages into human years, then reduces the converted pets' ages into one sum.

// INPUT three parameters
// an array: arr,
// a string: kind,
// a number: multiply

// Write a function that uses the JavaScript Array methods: .filter(), .map() and .reduce().

// OUTPUT:
// console.log(sumPetYears(pets, 'dog', 7));
// // The combined dogs' ages: 154
// console.log(sumPetYears(pets, 'cat', 4));
// // The combined cats' ages: 132
// console.log(sumPetYears(pets, 'parakeet', 5));
// // The combined parakeets' ages: 65

// Do not modify the original "pets" array. Write your function so that the "pets" array is not mutated as a result of invoking your function. To verify the input array is not mutated, you can console.log it after your function:
// console.log(pets); // ---> remains the same? Yes!

// implicit binding
const myObj = {
    'greeting': 'Hello',
    'sayHello': function(name) {
      return `${this['greeting']} my name is ${name}`;
    }
  };
  
  myObj.sayHello('Josh');
  
  // new binding
  function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + ' ' + this.greeter);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  jerry.speak();
  newman.speak();
  
  // explicit binding
  let me = {
    name: 'Josh',
    age: 33
  };
  
  let sayName = function(skill1, skill2, skill3) {
    console.log(this.name + skill1 + skill2 + skill3);
  };
  
  let skills = ['HTML', 'CSS', 'JS'];
  // call binds individually
  sayName.call(me, skills[0], skills[1], skills[2]);
  // spread syntax concatenate
  sayName.call(me, ...skills);
  // apply binds iteratively
  sayName.apply(me, skills);
  
  // bind turns call functionality into new function
  let newFunction = sayName.bind(me, ...skills);
  newFunction();
  
  // classical inheritance
  // class parent(attr) {
  
  // }
  
  // class child extends parent() {
  
  // }
  
  // let myObj = { name: 'Josh' };
  
  // console.dir(myObj);
  
  function Parent(attrs) {
    this.gender = attrs.gender;
    this.age = attrs.age;
    this.name = attrs.name;
    this.homeTown = attrs.homeTown;
  }
  
  Parent.prototype.speak = function() {
    return `Hello, my name is ${this.name}`;
  };
  
  function Child(attr) {
    Parent.call(this, attr);
    this.toys = attr.toys;
  }
  
  Child.prototype = Object.create(Parent.prototype);
  
  const fred = new Parent ({
    'gender': 'M',
    'age': 35,
    'name': 'Fred',
    'homeTown': 'Bedrock'
  });
  
  const wilma = new Parent ({
    'gender': 'F',
    'age': 25,
    'name': 'Wilma',
    'homeTown': 'Bedrock'
  });
  
  fred.age;
  wilma.age;
  fred.speak();
  wilma.speak();
  
  const pebbles = new Child({ 
    'gender': 'F',
    'age': 3,
    'homeTown': 'Bedrock',
    'toys': 'Rock'
  });
  
  console.log(pebbles.toys);
  
  const greeting = 'Hello';
  function greet() {
      console.log(this);
      return greeting;
  }