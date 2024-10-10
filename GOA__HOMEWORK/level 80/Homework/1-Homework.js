let people = [
    { name: 'Gio', age: 25 },
    { name: 'Amiran', age: 78 },
    { name: 'Dani', age: 43 }
];

let names = people.map(function(person) {
    return person.name;
});

console.log(names);
