function combineLists(keys, values) {
    let dictionary = {};

    for (let i = 0; i < keys.length; i++) {
        dictionary[keys[i]] = values[i];
    }

    return dictionary;
}

let keys = ['a', 'b', 'c'];
let values = [1, 2, 3];
let result = combineLists(keys, values);
console.log(result);