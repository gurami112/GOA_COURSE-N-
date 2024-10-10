let user = {
    Family: {
        Mother: "sofo",
        Father: "pavle"
    },
    name: "guram",
    age: 14,
    isStudent: true,
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    },
    Squad: ["Aleksandre Tabatazde","Aleqsandre Apkhazava","Andria Chankvetadze","Andria Shanava","Gëgä Shøtäzdë","Gio Tvaliashvili","Guga Guruli","Ilia Mikadze","Ioane Khutsishvili","Mariam Shixiashvili","Lukacho Lomidze","Mariami Gogia","..."]
};

console.log("Intenger: ", user.name);
console.log("String: ", user.age);
console.log("Boolean: ", user.isStudent);
console.log("Array: ", user.Squad);
console.log("Function: ", user.greet);
console.log("Object: ", user.Family);