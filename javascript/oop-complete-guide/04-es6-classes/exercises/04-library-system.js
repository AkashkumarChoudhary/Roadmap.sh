/**
 * Practice Exercise 4: Library Class System
 *
 * - Book: title, author, ISBN, isCheckedOut
 * - LibraryMember: name, memberId, borrowedBooks[], borrowBook(bookIsbn, library), returnBook(bookIsbn)
 * - Library: books[], members[], addBook(book), removeBook(isbn), registerMember(member)
 * - Getters: member.borrowedCount, library.totalBooks
 */

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isCheckedOut = false;
  }
}

class LibraryMember {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  get borrowedCount() {
    return this.borrowedBooks.length;
  }

  borrowBook(bookIsbn, library) {
    const book = library.books.find((b) => b.isbn === bookIsbn);
    if (!book) {
      console.log('Book not found');
      return false;
    }
    if (book.isCheckedOut) {
      console.log('Book already checked out');
      return false;
    }
    book.isCheckedOut = true;
    this.borrowedBooks.push(book);
    console.log(`${this.name} borrowed "${book.title}"`);
    return true;
  }

  returnBook(bookIsbn) {
    const idx = this.borrowedBooks.findIndex((b) => b.isbn === bookIsbn);
    if (idx === -1) {
      console.log('Book not in borrowed list');
      return false;
    }
    const book = this.borrowedBooks.splice(idx, 1)[0];
    book.isCheckedOut = false;
    console.log(`${this.name} returned "${book.title}"`);
    return true;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  get totalBooks() {
    return this.books.length;
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added "${book.title}" to library`);
  }

  removeBook(isbn) {
    const idx = this.books.findIndex((b) => b.isbn === isbn);
    if (idx === -1) {
      console.log('Book not found');
      return false;
    }
    const book = this.books[idx];
    if (book.isCheckedOut) {
      console.log('Cannot remove checked-out book');
      return false;
    }
    this.books.splice(idx, 1);
    console.log(`Removed "${book.title}"`);
    return true;
  }

  registerMember(member) {
    this.members.push(member);
    console.log(`Registered member ${member.name} (${member.memberId})`);
  }
}

const lib = new Library();
const b1 = new Book('Clean Code', 'R. Martin', 'ISBN-1');
const b2 = new Book('JS Guide', 'D. Flanagan', 'ISBN-2');
lib.addBook(b1);
lib.addBook(b2);
console.log('Total books:', lib.totalBooks);

const alice = new LibraryMember('Alice', 'M001');
lib.registerMember(alice);
alice.borrowBook('ISBN-1', lib);
console.log('Alice borrowed count:', alice.borrowedCount);
alice.returnBook('ISBN-1');
lib.removeBook('ISBN-2');
