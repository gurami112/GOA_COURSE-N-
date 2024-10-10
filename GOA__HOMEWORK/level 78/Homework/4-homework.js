function findCommonElements(list1, list2, list3) {
    let commonElements = [];

    for (let i = 0; i < list1.length; i++) {
        if (list2.indexOf(list1[i]) !== -1 && list3.indexOf(list1[i]) !== -1) {
            commonElements.push(list1[i]);
        }
    }

    return commonElements;
}

let list1 = [1, 2, 3, 4, 5];
let list2 = [4, 5, 6, 7, 8];
let list3 = [5, 7, 8, 9, 10];
let result = findCommonElements(list1, list2, list3);
console.log(result);