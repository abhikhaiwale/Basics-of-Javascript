// ternary operator

const x = 10;
const color = x > 10 ? "red" : "blue"; // if else comes with :

console.log(color);

// switch statement

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// functions

// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }
// addNums(5, 4);

// saving default values to parameters

function addNums(num1 = 1, num2 = 3) {
  console.log(num1 + num2);
}
addNums();

//constructor functions and prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear(); // adding methods
//   };
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// // instantiate object

// const person1 = new Person("john", "doe", "4-3-1980");
// const person2 = new Person("smith", "dok", "4-4-1980");

// console.log(person1.dob);
// console.log(person2);

// class

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

console.log(window);

//single element selectors

// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

//multiple element selectors

// console.log(document.querySelectorAll(".item"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item)); //looping through and grabing each item

//manipulating the DOM

const ul = document.querySelector(".items");

// ul.remove();

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";

// changing inner text of the tags

// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");

// changing css of the tags.

// btn.style.background = "red";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   // there are different events mouseover , mouseout , input etc.
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerText = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}:${emailInput.value}`)
    );
    userList.appendChild(li);

    //clear fields

    nameInput.value = "";
    emailInput.value = "";
  }
}
