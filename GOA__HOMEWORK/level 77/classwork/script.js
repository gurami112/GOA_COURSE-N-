// function greetUser(name) {
//     return `Hello ${name}, have a good day`;
// }
//
//
// function calculateRectangleArea(length, width) {
//     return length * width;
// }
//
//
//
//
// let p = document.getElementById("demo");
// let button = document.getElementById("change");
// button.addEventListener("click", function () {
//     p.textContent = "Hello";
// });
//
//
// let demoElement = document.getElementById('demo');
//
//
// document.addEventListener("click", function () {
//
//     demoElement.style.fontSize = '24px';
// });
//
//
// document.getElementById('alertButton').addEventListener('click', function() {
//     alert('Button Clicked!');
// });
//
//
// function guessNumber() {
//     let guessedNumber = Number(prompt('Enter a number between 1 and 1000:'));
//     let randomNumber = Math.floor(Math.random() * 1000) + 1;
//
//     if (guessedNumber === randomNumber) {
//         alert('Correct!');
//     } else {
//         alert('Incorrect!');
//     }
// }
//
//
// function calculateTotalCost() {
//     let totalItems = parseInt(prompt('Enter the number of items:'));
//     let totalCost = 0;
//
//     for (let i = 1; i <= totalItems; i++) {
//         let price = parseFloat(prompt(`Enter the price for item ${i}:`));
//         totalCost += price;
//     }
//
//     alert(`Total cost: $${totalCost.toFixed(2)}`);
// }
//
//
// let a = 5, b = 10;
//
// console.log(a == b);
// console.log(a != b);
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);
//
// let x = 'apple', y = 'banana';
//
// console.log(x == y);
// console.log(x != y);
// console.log(x === y);
// console.log(x !== y);
//
//
// function checkDiscountEligibility() {
//     var age = parseInt(prompt('Enter your age:'));
//     var purchaseAmount = parseFloat(prompt('Enter your total purchase amount:'));
//
//     if (age > 60 || purchaseAmount >= 100) {
//         alert('Congratulations! You are eligible for a discount.');
//     } else {
//         alert('Sorry, you are not eligible for a discount.');
//     }
// }
//
//
//
//
// function checkPassOrFail() {
//     let midtermScore = parseFloat(prompt('Enter your midterm score (0-100):'));
//     let finalScore = parseFloat(prompt('Enter your final exam score (0-100):'));
//     let projectScore = parseFloat(prompt('Enter your project score (0-100):'));
//
//
//     if (isNaN(midtermScore) || isNaN(finalScore) || isNaN(projectScore) ||
//         midtermScore < 0 || midtermScore > 100 ||
//         finalScore < 0 || finalScore > 100 ||
//         projectScore < 0 || projectScore > 100) {
//         alert('Please enter valid scores between 0 and 100.');
//         return;
//     }
//
//     let weightedAverage = (midtermScore * 0.2) + (finalScore * 0.4) + (projectScore * 0.4);
//
//     let message;
//     if (weightedAverage >= 70) {
//         message = `Congratulations, you have passed the course with an average score of ${weightedAverage.toFixed(2)}.`;
//     } else {
//         message = `Sorry, you have failed the course with an average score of ${weightedAverage.toFixed(2)}.`;
//     }
//
//     alert(message);
// }
//
document.addEventListener("DOMContentLoaded", () => {
    let parent = document.querySelector("#parent");
    let child = document.querySelector("#child");

    parent.addEventListener("click", () => {
        changeColor(parent);
    }, false);

    child.addEventListener("click", () => {
        changeColor(child);
    }, false);

    function changeColor(element) {
        element.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
