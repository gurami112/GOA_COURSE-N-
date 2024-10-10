function countCommonElements(list1, list2) {
    let commonElements = [];

    for (let item of list1) {
        if (list2.includes(item) && !commonElements.includes(item)) {
            commonElements.push(item);
        }
    }

    return commonElements.length;
}

let list1 = [1, 2, 3, 4, 5];
let list2 = [4, 5, 6, 7, 8];
let result = countCommonElements(list1, list2);
console.log(result);
