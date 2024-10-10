function splitListByValue(list, value) {
    let lessThanValue = [];
    let greaterOrEqualValue = [];

    for (let item of list) {
        if (item < value) {
            lessThanValue.push(item);
        } else {
            greaterOrEqualValue.push(item);
        }
    }

    return [lessThanValue, greaterOrEqualValue];
}

let list = [1, 4, 7, 3, 8, 5];
let value = 5;
let result = splitListByValue(list, value);
console.log(result);
