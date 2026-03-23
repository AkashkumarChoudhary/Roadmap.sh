/**
 * Librarian — extends Person with privileges
 * - employeeId
 * - addBook(library, book), removeBook(library, isbn), registerMember(library, member)
 * - describe() polymorphic
 */

const { Person } = require('./Person');

class Librarian extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  addBook(library, book) {
    return library.addBook(book);
  }

  removeBook(library, isbn) {
    return library.removeBook(isbn);
  }

  registerMember(library, member) {
    return library.registerMember(member);
  }

  describe() {
    return `Librarian: ${this.name}, Employee ID: ${this.employeeId}`;
  }
}

module.exports = { Librarian };
