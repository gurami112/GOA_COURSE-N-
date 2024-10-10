const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getSummary: function() {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
  };

console.log("Title:", book.title);
console.log("Author:", book.author);
book.year = 2021;
console.log("Updated year:", book.year);

console.log(book.getSummary());


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Moby Dick", "Herman Melville", 1851);


console.log("Book 1 - Title:", book1.title);
console.log("Book 1 - Author:", book1.author);
console.log("Book 1 - Summary:", book1.getSummary());

console.log("Book 2 - Title:", book2.title);
console.log("Book 2 - Author:", book2.author);
console.log("Book 2 - Summary:", book2.getSummary());

console.log("Book 3 - Title:", book3.title);
console.log("Book 3 - Author:", book3.author);
console.log("Book 3 - Summary:", book3.getSummary());