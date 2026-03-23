/**
 * Library — singleton-like manager
 * - books[], members[], borrowRecords[] (for fines)
 * - addBook, removeBook, registerMember, checkoutBook, returnBook
 * - calculateFinesForMember, searchByTitle, searchByAuthor, getStats
 * - Static getInstance(), static init for config
 */

const { Member } = require('./Member');

class Library {
  static #instance = null;
  static #config = {};
  static #borrowDays = 14;
  static #finePerDay = 1;

  static {
    Library.#config = {
      maxBorrowPerMember: 5,
      borrowDays: 14,
      finePerDay: 1,
    };
    Library.#borrowDays = Library.#config.borrowDays;
    Library.#finePerDay = Library.#config.finePerDay;
  }

  #books = [];
  #members = [];
  #borrowRecords = [];

  constructor() {
    if (Library.#instance) {
      return Library.#instance;
    }
    Library.#instance = this;
  }

  static getInstance() {
    if (!Library.#instance) {
      Library.#instance = new Library();
    }
    return Library.#instance;
  }

  addBook(book) {
    if (this.#books.some((b) => b.isbn === book.isbn)) {
      console.log('Book already in library');
      return false;
    }
    this.#books.push(book);
    console.log(`Added: ${book.getInfo()}`);
    return true;
  }

  removeBook(isbn) {
    const book = this.#books.find((b) => b.isbn === isbn);
    if (!book) {
      console.log('Book not found');
      return false;
    }
    if (book.isCheckedOut) {
      console.log('Cannot remove checked-out book');
      return false;
    }
    this.#books = this.#books.filter((b) => b.isbn !== isbn);
    console.log(`Removed: ${book.getInfo()}`);
    return true;
  }

  registerMember(member) {
    if (this.#members.some((m) => m.memberId === member.memberId)) {
      console.log('Member already registered');
      return false;
    }
    this.#members.push(member);
    console.log(`Registered: ${member.describe()}`);
    return true;
  }

  getBook(isbn) {
    return this.#books.find((b) => b.isbn === isbn) || null;
  }

  getMember(memberId) {
    return this.#members.find((m) => m.memberId === memberId) || null;
  }

  checkoutBook(isbn, memberId) {
    const book = this.getBook(isbn);
    const member = this.getMember(memberId);
    if (!book || !member) return false;
    if (book.isCheckedOut) {
      console.log('Book already checked out');
      return false;
    }
    const borrowedCount = member.borrowedBooks.length;
    const maxBorrow = member.tier === Member.TIER_PREMIUM ? 10 : Library.#config.maxBorrowPerMember;
    if (borrowedCount >= maxBorrow) {
      console.log('Max borrow limit reached');
      return false;
    }
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Library.#borrowDays);
    book._setCheckedOut(memberId, dueDate);
    this.#borrowRecords.push({
      memberId,
      isbn,
      borrowedAt: new Date(),
      dueDate,
      returnedAt: null,
    });
    member._addBorrowed(book);
    console.log(`${member.name} checked out "${book.title}". Due: ${dueDate.toDateString()}`);
    return true;
  }

  returnBook(book) {
    if (!book.isCheckedOut) return false;
    const record = this.#borrowRecords.find((r) => r.isbn === book.isbn && !r.returnedAt);
    if (record) record.returnedAt = new Date();
    const member = this.getMember(book.borrowerId);
    if (member) member._removeBorrowed(book.isbn);
    book._setReturned();
    console.log(`Returned: ${book.title}`);
    return true;
  }

  calculateFinesForMember(memberId) {
    const now = new Date();
    let total = 0;
    for (const r of this.#borrowRecords) {
      if (r.memberId !== memberId || r.returnedAt) continue;
      if (now > r.dueDate) {
        const daysLate = Math.ceil((now - r.dueDate) / (1000 * 60 * 60 * 24));
        total += daysLate * Library.#finePerDay;
      }
    }
    return total;
  }

  searchByTitle(title) {
    const lower = title.toLowerCase();
    return this.#books.filter((b) => b.title.toLowerCase().includes(lower));
  }

  searchByAuthor(author) {
    const lower = author.toLowerCase();
    return this.#books.filter((b) => b.author.toLowerCase().includes(lower));
  }

  getStats() {
    const checkedOut = this.#books.filter((b) => b.isCheckedOut).length;
    return {
      totalBooks: this.#books.length,
      totalMembers: this.#members.length,
      booksCheckedOut: checkedOut,
      borrowRecordsCount: this.#borrowRecords.length,
    };
  }

  get totalBooks() {
    return this.#books.length;
  }
}

module.exports = { Library };
