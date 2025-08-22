// Book class (OOP Concept)
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
  }

  markAsRead() {
    this.isRead = true;
  }

  getInfo() {
    return `${this.title} by ${this.author} - ${this.isRead ? "Read ✅" : "Not Read ❌"}`;
  }
}

// Library class to manage books
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    console.log("📚 Library Collection:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }
}

// ====== Testing the Library ======

// Create library
const myLibrary = new Library();

// Create books
const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("Clean Code", "Robert C. Martin");

// Add books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books
myLibrary.listBooks();

// Mark first book as read
book1.markAsRead();

// List again after marking read
myLibrary.listBooks();
