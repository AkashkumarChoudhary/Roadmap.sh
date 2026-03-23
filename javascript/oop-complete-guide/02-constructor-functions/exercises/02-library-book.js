/**
 * Practice Exercise 2: LibraryBook Constructor
 *
 * - Takes: title, author, isbn, copies
 * - Sets: isCheckedOut (false), dueDate (null)
 * - Methods: checkout(borrowerName), returnBook(), isAvailable()
 * - checkout: if available, set dueDate to 14 days from now
 * - Create 3 book instances and test
 */

function LibraryBook(title, author, isbn, copies) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.copies = copies;
  this.isCheckedOut = false;
  this.dueDate = null;
  this.borrowerName = null;

  this.checkout = function (borrowerName) {
    if (!this.isAvailable()) {
      console.log(`"${this.title}" is not available.`);
      return false;
    }
    this.isCheckedOut = true;
    this.borrowerName = borrowerName;
    const due = new Date();
    due.setDate(due.getDate() + 14);
    this.dueDate = due;
    console.log(`"${this.title}" checked out by ${borrowerName}. Due: ${this.dueDate.toDateString()}`);
    return true;
  };

  this.returnBook = function () {
    this.isCheckedOut = false;
    this.dueDate = null;
    this.borrowerName = null;
    console.log(`"${this.title}" has been returned.`);
  };

  this.isAvailable = function () {
    return this.copies > 0 && !this.isCheckedOut;
  };
}

const book1 = new LibraryBook('Clean Code', 'Robert Martin', 'ISBN-001', 2);
const book2 = new LibraryBook('JS: The Good Parts', 'Douglas Crockford', 'ISBN-002', 1);
const book3 = new LibraryBook('Design Patterns', 'Gang of Four', 'ISBN-003', 1);

book1.checkout('Alice');
console.log('Book1 available?', book1.isAvailable()); // false
book2.checkout('Bob');
book1.returnBook();
console.log('Book1 available?', book1.isAvailable()); // true
book3.checkout('Carol');
