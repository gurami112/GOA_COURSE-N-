function filterMultiplesOfFive(numbers) {
    return numbers.filter(function(num) {
        return num % 5 === 0 && num > 20;
    });
}

let numbers = [10, 15, 25, 30, 35, 40];
let filteredNumbers = filterMultiplesOfFive(numbers);

console.log(filteredNumbers);
