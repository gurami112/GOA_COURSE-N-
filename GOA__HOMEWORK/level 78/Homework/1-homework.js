function mergeLists(list1, list2) {
    let mergedList = [];

    for (let i = 0; i < list1.length; i++) {
        if (mergedList.indexOf(list1[i]) === -1) {
            mergedList.push(list1[i]);
        }
    }

    for (let i = 0; i < list2.length; i++) {
        if (mergedList.indexOf(list2[i]) === -1) {
            mergedList.push(list2[i]);
        }
    }

    return mergedList;
}

let list1 = [7, 9, 3];
let list2 = [3, 2, 8];
let result = mergeLists(list1, list2);
console.log(result);