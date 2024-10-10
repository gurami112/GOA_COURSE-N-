function sumDictionaryValues(dict) {
    let result = {};

    for (let key in dict) {
        result[key] = 0;
        for (let num of dict[key]) {
            result[key] += num;
        }
    }

    return result;
}

let dict = {
    'a': [1, 2, 3],
    'b': [4, 5],
    'c': [6, 7, 8]
};

let result = sumDictionaryValues(dict);
console.log(result);
