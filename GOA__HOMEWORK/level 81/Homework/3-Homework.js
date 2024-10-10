function capitalizeNames(names) {
    return names.map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
}

let names = ["vaxo", "gio", "aleqsi"];
let capitalizedNames = capitalizeNames(names);

console.log(capitalizedNames);
