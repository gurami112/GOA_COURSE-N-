function filterNames(names) {
    return names.filter(function(name) {
        return name[0] === name[0].toUpperCase() && name.length <= 5;
    });
}

let names = ["Elene", "Andria", "George", "Davit", "Nika"];
let filteredNames = filterNames(names);

console.log(filteredNames);
