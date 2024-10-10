function mergeDictionaries(dict1, dict2) {
    let mergedDict = { ...dict1 };
    for (let key in dict2) {
        mergedDict[key] = dict2[key];
    }
    return mergedDict;
}

let dict1 = { 'a': 1, 'b': 2 };
let dict2 = { 'b': 3, 'c': 4 };
let result = mergeDictionaries(dict1, dict2);
console.log(result);