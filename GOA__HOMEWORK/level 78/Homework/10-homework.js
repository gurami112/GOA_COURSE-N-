function filterByValue(dict, value) {
    let filteredDict = {};

    for (let key in dict) {
        if (dict[key] === value) {
            filteredDict[key] = dict[key];
        }
    }

    return filteredDict;
}

let dict = { 'a': 1, 'b': 2, 'c': 1, 'd': 3 };
let result = filterByValue(dict, 1);
console.log(result);