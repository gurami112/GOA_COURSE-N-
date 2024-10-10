function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

const myBook = new Book('ვეფხის ტყაოსანი', 'შოთა რუსთაველი', 1200, 'პოემა');


console.log(myBook);
