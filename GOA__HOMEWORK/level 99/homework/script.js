// Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these properties.



class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  console.log(myCar.make);
  console.log(myCar.model);
  

// Use Private Properties
// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount {
    #balance; // Private property
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        console.log("Insufficient funds.");
      } else {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}`);
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(`Current Balance: $${myAccount.getBalance()}`);
  



// Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.


class MathOperations {
    static PI = 3.14159;
  
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log(MathOperations.add(5, 10)); // 15
  console.log(MathOperations.PI);          // 3.14159
  


// Use Getters and Setters
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
      if (value <= 0) {
        throw new Error("Width must be a positive number.");
      }
      this._width = value;
    }
  
    get width() {
      return this._width;
    }
  
    set height(value) {
      if (value <= 0) {
        throw new Error("Height must be a positive number.");
      }
      this._height = value;
    }
  
    get height() {
      return this._height;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.area); // 50
  
  rectangle.width = 7;
  rectangle.height = 3;
  console.log(rectangle.area); // 21
  


// Private Methods
// Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

class User {
    #password;
  
    set password(value) {
      if (this.#validatePassword(value)) {
        this.#password = value;
        console.log("Password set successfully.");
      } else {
        console.log("Password is too weak. Please choose a stronger password.");
      }
    }
  
    #validatePassword(password) { 
      return password.length >= 6;
    }
  
    get password() {
      return this.#password;
    }
  }
  
  const user = new User();
  user.password = "12345"; 
  user.password = "strongPassword123";
  console.log(user.password); 
  



// Private Properties with Getters and Setters
// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

class Book {
    constructor(title, pages) {
      this.title = title;
      this._pages = pages; // Private property
    }
  
    get pages() {
      return this._pages;
    }
  
    set pages(value) {
      if (value <= 0) {
        throw new Error("Number of pages must be a positive number.");
      }
      this._pages = value;
    }
  }
  
  const book = new Book("JavaScript Basics", 150);
  console.log(book.title); 
  console.log(book.pages);
  
  book.pages = 200; 
  console.log(book.pages); 
  

  



// Static Method for Instance Counting
// Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.

class Player {
    static playerCount = 0; 
  
    constructor(name) {
      this.name = name;
      Player.incrementPlayerCount();
    }
  
    static incrementPlayerCount() {
      Player.playerCount++;
    }
  
    static getPlayerCount() {
      return Player.playerCount;
    }
  }
  

  const player1 = new Player("Alice");
  const player2 = new Player("Bob");
  
  console.log(Player.getPlayerCount()); // 2
  


// Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.



class Vehicle {
    #speed;
  
    constructor(speed) {
      this.#speed = speed;
    }
  
    setSpeed(newSpeed) {
      if (newSpeed < 0) {
        throw new Error("Speed cannot be negative.");
      }
      this.#speed = newSpeed;
    }
  
    getSpeed() {
      return this.#speed;
    }
  }
  
  class Bike extends Vehicle {
    constructor(speed) {
      super(speed);
    }
  
    increaseSpeed(amount) {
      this.setSpeed(this.getSpeed() + amount);
    }
  
    decreaseSpeed(amount) {
      this.setSpeed(this.getSpeed() - amount);
    }
  }
  

  const myBike = new Bike(20);
  console.log(myBike.getSpeed()); 
  
  myBike.increaseSpeed(10);
  console.log(myBike.getSpeed()); 
  
  myBike.decreaseSpeed(5);
  console.log(myBike.getSpeed());
  

// Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.



