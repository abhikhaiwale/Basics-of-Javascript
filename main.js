/* basic console statements*/

// console.log("hello world");
// console.error("this is an error");
// console.warn("this is a warning");

/*var, let , const
 we dont use var anymore start using let and const
*/

//let , const

let age = 30; //but if i use const here it will throw error as const cannot have a chnage in value
age = 31;
console.log(age);

const age1 = 35;
console.log(age1); //use const only when you are not going to reassign it.

let score;
score = 10;
console.log(score);

const score1 = 10;
//score1 = 22; //this will throw error as it is const
console.log(score1);

/* string ,Number , boolean , null , undefined , symbol */

const name = "abhishek khaiwale"; // string can have multiple or single quotes

//integer const

age = 30;

//boolean

const isCool = true; //boolean should not have any quotes. if you add quotes it will change to string

// float value doent have any different way to represent

const rating = 4.5;

//null basically means empty

const x = null; //empty value
const y = undefined;
let z; // the value for the variable is undefined.

//data types of initialised variables

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// concatenation

let name1 = "abhishek khaiwale";

//template string for concatenation

console.log(`my name is ${name1}`);

//storing it in a variable and using it later
const hello = `my name is ${name1}`; // important

// printing it on screen

console.log(hello);

// string properties and methods

const s = "hello world";

//how to get the length of string

console.log(s.length);

// to change the complete string to uppercase

console.log(s.toUpperCase());

// to chnage the complete string to lowercase

console.log(s.toLowerCase());

// to get the substring from the actual string

console.log(s.substring(0, 5)); //important
// it takes index as values from 0th index to 4th index

console.log(s.substring(0, 5).toUpperCase());

// split method to split string
// spliting string according to letters:-

console.log(s.split(""));

//spliting the string according to "e" sign

console.log(s.split("e")); //important

// main use of string

const k = "technology,computer,it,code";

console.log(k.split(",")); //splits store the data into array

// ARRAYS - variables that hold multiple values

const number = new Array(1, 2, 3, 4, 5); // creating a array using constructor
console.log(number); // whenever new is used with a method it is called a constructor

const fruits = ["apple", "oranges", "pears"];
console.log(fruits);

// in javascript we dont need to have same type of data in an array we can store num strings in a single array

const fruits1 = ["apple", "ornages", "pears", 10, true]; // we have stored string, numbers ,boolean as well

console.log(fruits1);

// accessing the array fruits

console.log(fruits[1]); // we get output as oranges

// to add elements into array in the end

fruits.push("mangoes");
console.log(fruits);

// to add elements in the beginning of the array

fruits.unshift("strawberries");
console.log(fruits);
// how to remove last element of the array

fruits.pop();
console.log(fruits);
// remove the first element of the array

fruits.shift(); // it will eventualy remove strawbeerries
console.log(fruits);

console.log(Array.isArray("hello")); // to check if anything is an array or not

// it will return boolean values

console.log(Array.isArray(fruits));

// if you want index of any particular element in array

console.log(fruits.indexOf("oranges"));

//object literals

const person = {
  firstName: "abhishek",
  lastName: "khaiwale",
  age: 30,
  hobbies: ["cricket", "coding", "movies"], // array initialised inside an object
  address: {
    // this is an object embeded inside an object
    street: "joker",
    city: "pune",
    state: "maharashtra",
  },
};

// printing the object

console.log(person);

// to acces a particular key

console.log(person.firstName, person.lastName);

// printing movies out of the hobbies array in object person

console.log(person.hobbies[2]);

//accessing the embeded objects i.e is gettting city

console.log(person.address.city);

// destructuring :- pulling different keys from object as variables and then using them

const { firstName, lastName } = person;

console.log(firstName);

//destructing embeded objects for city i.e is the key here

const {
  address: { city },
} = person;
console.log(city);

// destructuring is new feature i.e a part of new javascript es6

// adding porperties in javascript object

person.email = "aakhaiwale@mitaoe.ac.in";

console.log(person);

// arrays of object

const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "dentist appt",
    isCompleted: false,
  },
];

//accessing it

console.log(todos[1].text);

// simple for loops

for (let i = 0; i < 10; i++) {
  console.log(`For Loop Numbers: ${i}`);
}

// while loop

let i = 0;
while (i < 10) {
  console.log(`while loop Numbers: ${i}`);
  i++;
}

// looping through arrays

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//high order arrays methods  // use these most of the time
// for each , map , filter

// for each
todos.forEach(function (todo) {
  console.log(todo.text);
});

// arrow function new es6 feature

todos.forEach((todo) => {
  console.log(todo.text);
}); // this return elements individually

//map

const todotext = todos.map((todo) => {
  return todo.text;
}); // they return the result in the form of array
console.log(todotext);

//filter  //one of the most powerful method

const toDoCompleted = todos.filter((todo) => {
  return todo.isCompleted === true;
});
console.log(toDoCompleted);

// conditions

// if statements

const l = 10;

if (l === 10) {
  console.log("l is 10");
}

// if else

if (l === 10) {
  console.log("l is 10");
} else {
  console.log(" l is not 20");
}

// if else if else

if (l === 10) {
  console.log("l is 10");
} else if (l > 10) {
  console.log("l is greater than 10");
} else {
  console.log(" l is not 20");
}
