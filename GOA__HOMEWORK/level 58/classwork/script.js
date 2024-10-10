//შექმენით ობიექტი, რომელსაც გადასცემთ თქვენს შესახებ ინფორმაციას შემდეგ კი დაეჭდეთ ეს ინფორმაცია ერთ გრძელ წინადადებაში, მაგ. ჩემი სახელია გაბრიელი, ჩემი გვარია მოლოდინი ...
let user = {
    name: "revazi",
    age: 13,
    surname: "vakhtangashvili",
    address: "eredvi 13",
}

user.name = `Gurami`




function console1(){
    console.log(`my name is ${user[`name`]} i am ${user[`age`]} years old my surname is ${user[`surname`]} and finaly my adress is ${user[`address`]}`) //method 1

    console.log(`my name is ${user.name} i am ${user.age} years old my surname is ${user.surname} and finaly my adress is ${user.address}`) //method 2
}

console1()
