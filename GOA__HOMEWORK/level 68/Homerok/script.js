


// part one create objact literal
               // and
// Part 2 -  Accessing and Modifying Properties
            // and
// Part 3 - Using the Method



/*
let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year:1925,
    getsummery: function(){
          return book.title + ' ' + book.author + ' ' + book.year

    }

}

book.year = 2021
console.log(book.title)
console.log(book.author)
console.log(book.year)

console.log(book.getsummery())
*/
// Creating an Object Constructor



// Part 1 - Define a constructor function called Book that takes title, author, and year as parameters and assigns them to the object.


     // and 

    // Part 2 - Use the Book constructor to create three instances:


    function Book(title,author,year,book1,book2,book3){
        this.title = title
        this.author = author
        this.year = year
         this.book1 = book1
         this.book2 = book2
         this.book3 = book3
        this.getSummery = function(){
                  return this.book1+ ' ' + this.book2 + ' ' + this.book3
        }
    }
    
    let first =     new Book('Title','by Author,','published in Year.','To Kill a Mockingbird" by Harper Lee, published in 1960.','1984 by George Orwell, published in 1949.',  ' "Moby Dick" by Herman Melville, published in 1851.')
    
    console.log(first)
    
    
    
    console.log(first.book1)
    console.log(first.book2)
    console.log(first.book3)
    
    console.log(first.getSummery())
    
    
    