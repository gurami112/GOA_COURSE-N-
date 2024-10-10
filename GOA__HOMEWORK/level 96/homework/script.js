// Create an Object
// Create an object person with properties: name, age, and city. Log the object to the console.

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };


// Access Object Properties
// Given the person object, access and log the name and city properties.

console.log(person.name);
console.log(person.city);





// Destructuring an Object
// Destructure the name and age properties from the person object and log them.


const { name, age } = person;
console.log(name);
console.log(age);



// Nested Object Destructuring
// Create an object student with a name, age, and a nested address object containing city and country. Use destructuring to extract city and country from the address.

const student = {
    name: "Alice",
    age: 22,
    address: {
      city: "London",
      country: "UK"
    }
  };
  
  const { address: { city, country } } = student;
  console.log(city);
  console.log(country);
  


// Default Values in Destructuring
// Create an object product with properties name and price. Destructure name and category from the object, giving category a default value of "general".

const product = {
    name: "Laptop",
    price: 1000
  };
  
//   const {name, category = "general" } = product;
  console.log(name);
  console.log(category);
  



// Destructure from Function Parameters
// Write a function displayCar that takes an object with properties brand, model, and year as a parameter and logs them using destructuring.


function displayCar({ brand, model, year }) {
    console.log(brand);
    console.log(model);
    console.log(year);
  }
  
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  displayCar(car);
  


// Rest Operator with Objects
// Create an object book with properties title, author, year, and publisher. Use the rest operator to collect the year and publisher into a new object.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Scribner"
  };
  
  const { year, publisher, ...rest } = book;
  console.log(rest); // { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  


// Spread Operator with Objects
// Create two objects, user with properties name and age, and location with properties city and country. Merge them into a new object using the spread operator.

const user = {
    name: "Emily",
    age: 28
  };
  
  const location = {
    city: "Paris",
    country: "France"
  };
  
  const mergedObject = { ...user, ...location };
  console.log(mergedObject);
  


// Rest Operator with Function Arguments
// Write a function sumNumbers that takes any number of arguments using the rest operator and returns the sum of the numbers.

function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumNumbers(1, 2, 3, 4)); // 10
  console.log(sumNumbers(5, 10));      // 15
  


// Spread Operator with Arrays
// Create two arrays, numbers1 and numbers2. Use the spread operator to combine them into one array.
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedArray = [...numbers1, ...numbers2];
console.log(combinedArray);

