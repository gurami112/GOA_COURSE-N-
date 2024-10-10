function manualFilter(filter1, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (filter1(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = manualFilter(isEven, numbers);

console.log(evenNumbers);
