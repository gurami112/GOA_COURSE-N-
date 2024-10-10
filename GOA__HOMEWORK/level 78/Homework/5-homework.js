function removeDuplicates(list) {
    let uniqueList = [];

    for (let i = 0; i < list.length; i++) {
        if (uniqueList.indexOf(list[i]) === -1) {
            uniqueList.push(list[i]);
        }
    }

    return uniqueList;
}

let list = [1, 2, 3, 2, 4, 1];
let result = removeDuplicates(list);
console.log(result);
