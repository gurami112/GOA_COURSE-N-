let toDoList = [];

function addItem(item) {
    toDoList.push(item);
}

function removeItem(item) {
    let index = toDoList.indexOf(item);
    if (index !== -1) {
        toDoList.splice(index, 1);
    }
}

function viewList() {
    return toDoList;
}

addItem('dont Study in mziuri');
addItem('Study in GOA');
removeItem('Study in reschool');
console.log(viewList());
