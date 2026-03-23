/**
 * Member — extends Person
 * - memberId, tier ('regular' | 'premium'), borrowedBooks[]
 * - borrowBook(book, library), returnBook(bookIsbn), getFines(library)
 * - describe() polymorphic
 */

const { Person } = require('./Person');

class Member extends Person {
  static TIER_REGULAR = 'regular';
  static TIER_PREMIUM = 'premium';

  #borrowedBooks = [];

  constructor(name, age, memberId, tier = Member.TIER_REGULAR) {
    super(name, age);
    this.memberId = memberId;
    this.tier = tier;
  }

  get borrowedBooks() {
    return [...this.#borrowedBooks];
  }

  borrowBook(book, library) {
    if (!library.checkoutBook(book.isbn, this.memberId)) return false;
    return true;
  }

  returnBook(bookIsbn, library) {
    const idx = this.#borrowedBooks.findIndex((b) => b.isbn === bookIsbn);
    if (idx === -1) return false;
    const book = this.#borrowedBooks.splice(idx, 1)[0];
    library.returnBook(book);
    return true;
  }

  _addBorrowed(book) {
    this.#borrowedBooks.push(book);
  }

  _removeBorrowed(bookIsbn) {
    const idx = this.#borrowedBooks.findIndex((b) => b.isbn === bookIsbn);
    if (idx !== -1) this.#borrowedBooks.splice(idx, 1);
  }

  getBorrowedCount() {
    return this.#borrowedBooks.length;
  }

  getFines(library) {
    return library.calculateFinesForMember(this.memberId);
  }

  describe() {
    return `Member: ${this.name}, ID: ${this.memberId}, Tier: ${this.tier}, Borrowed: ${this.getBorrowedCount()}`;
  }
}

module.exports = { Member };
