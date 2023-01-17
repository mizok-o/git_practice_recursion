class Book {
  constructor(title, year) {
    this.author = "Stephen Hawkings";
    this.title = title;
    this.year = year;
  }
}

function printBookArray(books) {
  for (const book of books)
    console.log(book.title + " written by " + book.author + " in " + book.year);
}

books = [];
books.push(new Book("How Did It All Begin?", "2021"));
books.push(new Book("The Theory of Everything", "2010"));
books.push(new Book("God Created the Integers", "2006"));

printBookArray(books);
