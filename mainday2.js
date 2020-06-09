// standard for loop
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//always ucomment a particular part and run and comment it again to run something else

console.log(companies); // print out the complete array

// standard array

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// } // prints all the elements of the array one by one

//forEach loop

companies.forEach(function (company) {
  console.log(company);
}); //this is how to get all elements from array

// printing the name of comapany from array

companies.forEach(function (company) {
  console.log(company.name);
});

// filter on ages array
//getting all values where age is greater than 21

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// above was normal for loop to use filter now actual for loop

// const canDrink1 = ages.filter(function (age) {
//   if (age > 21) {
//     return true;
//   }
// });
// console.log(canDrink1);

// // filter using ES6 feature arrow function
// const canDrink1 = ages.filter((age) => age > 21);
// console.log(canDrink1);

// filtering retail comapanies

// const retailcompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// console.log(retailcompanies);

//ES6 feature

const retailcompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailcompanies);

// filter all comapnies from 80s

const companies2 = companies.filter(
  (company) => company.start > 1980 && company.start < 1990
);
console.log(companies2);

// companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start > 10
);
console.log(lastedTenYears);

//map
// gives out new array from old array

//create array of company names

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// get company name with its start and end date using template string

const testmap = companies.map(
  (company) => `${company.name} [${company.start} ${company.end}]`
);
console.log(testmap);

// get a new array with square of all ages using map

// const testmap2 = ages.map((age) => age * age);
// console.log(testmap2);

//multiply ages by 2

const testmap2 = ages.map((age) => age * age).map((age) => age * 2);
console.log(testmap2);

// sorting

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

//ES6 format

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// sorting arrays

// const sortages = ages.sort((a, b) => a - b);
// console.log(sortages);

// a-b for ascending order and b-a for descening order

//reduce

//adding all age using for loop

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(ageSum);

// reduce total years of all companies

const totalyears = companies.reduce(
  (total, company) => total + (company.end - company.start)
);
console.log(totalyears);

// combining all methods

const combined = ages
  .map((age) => age * 2) // multiply age by 2
  .filter((age) => age >= 40) // get all ages above 40
  .sort((a, b) => a - b) // sort them in ascending order
  .reduce((a, b) => a + b, 0); //adding all the total count of ages

console.log(combined);
