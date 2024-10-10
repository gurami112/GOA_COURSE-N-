function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
