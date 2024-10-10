// 1. **Filter Prime Numbers**
//    - Create an array of numbers and use `filter()` to return only the prime numbers.

// const numArr = [1,2,3,4,5,6,7,8];

// const onlyPrime = numArr.filter((num) => {
//     if (num <= 1) return false; 
//     if (num <= 3) return true;  

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// });






// 2. Map to Object Conversion
// Given an array of objects (e.g., users with `id` and `name`), 
// use `map()` to create an array of strings that contains only the names.

// const arr = [{id: 123, name: "luka"},{id: 456, name: "ana"}];

// const names = arr.map((person) => {
//     return person.name;
// });





// 3. Filter Objects by Property
// Given an array of objects representing products (each having a `name` and `price`), 
// use `filter()` to return products that are cheaper than a certain value.

// const products = [{name: "apple", price: 25}, {name: "banana", price: 15}];

// const luxury = products.filter((product) => {
//     return product.price <= 15;
// });










// 4. Map Complex Transformations
// Create an array of objects representing books (with `title` and `author`). 
// Use `map()` to return an array of strings in the format: `"Title by Author"`.

// const books = [{title: "aivenho", author: "uolter scott"}];
// const bookList = books.map((book) => {
//     return `${book.title} by ${book.author}`
// });







// 5. Filter Numbers Based on Multiple Conditions
// Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.

// const numArr = [1,2,3,4,5,6,7,8];

// const filteredNumbers = numArr.filter((num) => {
//     return (num > 10) && (num % 3 == 0);
// });






// 6. Modify Array of Objects (map)
// Given an array of objects representing users with a `name` and `age`, use `map()` 
// to return a new array where all users are considered adults (i.e., add a new `isAdult` 
// property based on their age).

// const people = [{name: "luka", age: 16}, {name: "ana", age: 18}];

// const adults = people.map((person) => {
//     if(person.age >= 18){
//         return {
//             name: person.name,
//             age: person.age,
//             isAdult: true
//         }
//     }
//     else {
//         return {
//             name: person.name,
//             age: person.age
//         }
//     }
// });







// 7. Chaining map and filter
// Create an array of numbers. First, use `filter()` to return numbers greater than 50. 
// Then, use `map()` to halve those numbers.

// const numArr = [1,2,3,4,5,6,7,8];

// const bigNumbers = numArr.filter((num) => {
//     return num >= 50;
// });

// const halved = bigNumbers.map((num) => {
//     return num / 2;
// });