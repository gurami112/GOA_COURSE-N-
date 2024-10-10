function manualFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = manualFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
