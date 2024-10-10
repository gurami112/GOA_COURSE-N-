function filterOddNumbers(numbers) {
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }

    return oddNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = filterOddNumbers(numbers);
console.log(result);
