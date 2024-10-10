// Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these propertie


class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }


//Use Private Properties
//Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount {
    #balance; 
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (this.#balance >= amount) {
        this.#balance -= amount;
        return true;
      } else {
        console.log("Insufficient funds");
        return false;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }





//  Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.

class MathOperations {
    static add(a, b) {
      return a + b;
    }
    static PI = 3.14159;
  }



//   Use Getters and Setters
// Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    get area() {
      return this.width * this.height;
    }
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log("Width must be a positive number");
      }
    }
  
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.log("Height must be a positive number");
      }
    }
  }



//Private Methods
//Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

class User {
    #password;
  
    setPassword(password) {
      if (this.validatePassword(password)) {
        this.#password = password;
      } else {
        console.log("Password is too weak");
      }
    }
  
    validatePassword(password) {
      return password.length >= 8;
    }
  }



//   Private Properties with Getters and Setters
//   Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.
  

class Book {    
    #pages;
    constructor(title, pages) {
      this.title = title;
      this.#pages = pages;
    }
  
    get pages() {
      return this.#pages;
    }
  
    set pages(value) {
      if (value > 0) {
        this.#pages = value;
      } else {
        console.log("possitive");
      }
    }
  }


//   Static Method for Instance Counting
//   Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.
  

class Player {  
    static playerCount = 0;
    constructor(name) {
      this.name = name;
      Player.playerCount++;
    }
  
    static getPlayerCount() {
      return Player.playerCount;
    }
  }



//   Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.


class Vehicle {
    #speed;
    constructor(speed) {
      this.#speed = speed;
    }
  
    getSpeed() {
      return this.#speed;
    }
  
    setSpeed(speed) {
      this.#speed = speed;
    }
  }



//  Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.


class Student {          
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    static compareGrades(student1, student2) {
      if (student1.grade > student2.grade) {
        return `${student1.name} has a higher grade`;
      } else if (student1.grade < student2.grade) {
        return `${student2.name} has a higher grade`;
      } else {
        return "Both students have the same grade";
      }
    }
  }
