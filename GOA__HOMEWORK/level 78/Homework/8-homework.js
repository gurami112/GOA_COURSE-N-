function getKeys(dict) {
    let keysList = [];
    for (let key in dict) {
        keysList.push(key);
    }
    return keysList;
}

let dict = { 'a': 1, 'b': 2, 'c': 3 };
let result = getKeys(dict);
console.log(result);