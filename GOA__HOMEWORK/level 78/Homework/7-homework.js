let dict = { 'a': 1, 'b': 2, 'c': 3 };
let squaredDict = {};

for (let key in dict) {
    squaredDict[key] = dict[key] * dict[key];
}

console.log(squaredDict);