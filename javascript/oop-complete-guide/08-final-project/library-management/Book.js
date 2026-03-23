/**
 * Book — private fields for internal state
 * - #isbn, #title, #author, #isCheckedOut, #dueDate, #borrowerId
 * - Getters for safe read access
 */

class Book {
  #isbn;
  #title;
  #author;
  #isCheckedOut = false;
  #dueDate = null;
  #borrowerId = null;

  constructor(isbn, title, author) {
    this.#isbn = isbn;
    this.#title = title;
    this.#author = author;
  }

  get isbn() {
    return this.#isbn;
  }
  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get isCheckedOut() {
    return this.#isCheckedOut;
  }
  get dueDate() {
    return this.#dueDate;
  }
  get borrowerId() {
    return this.#borrowerId;
  }

  _setCheckedOut(borrowerId, dueDate) {
    this.#isCheckedOut = true;
    this.#borrowerId = borrowerId;
    this.#dueDate = dueDate;
  }

  _setReturned() {
    this.#isCheckedOut = false;
    this.#borrowerId = null;
    this.#dueDate = null;
  }

  getInfo() {
    return `${this.#title} by ${this.#author} (ISBN: ${this.#isbn})`;
  }
}

module.exports = { Book };
