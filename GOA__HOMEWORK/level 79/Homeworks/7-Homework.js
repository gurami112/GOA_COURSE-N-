function keyExists(dict, key) {
    return key in dict;
}

let dict = { 'a': 1, 'b': 2, 'c': 3 };
let keyToFind = 'b';
let result = keyExists(dict, keyToFind);
console.log(result);
