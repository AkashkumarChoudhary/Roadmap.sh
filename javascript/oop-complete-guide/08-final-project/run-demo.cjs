/**
 * Library Management System — Demo (CommonJS)
 * Run from repo root: node javascript/oop-complete-guide/08-final-project/run-demo.cjs
 */

const path = require('path');
const root = path.resolve(__dirname);

const { Book } = require(path.join(root, 'library-management', 'Book'));
const { Member } = require(path.join(root, 'library-management', 'Member'));
const { Librarian } = require(path.join(root, 'library-management', 'Librarian'));
const { Library } = require(path.join(root, 'library-management', 'Library'));
const { createMember } = require(path.join(root, 'library-management', 'createMember'));

const library = Library.getInstance();

const librarian = new Librarian('Alice Admin', 35, 'EMP001');
const member1 = createMember('regular', 'Bob', 28, 'M001');
const member2 = createMember('premium', 'Carol', 32, 'M002');

librarian.registerMember(library, member1);
librarian.registerMember(library, member2);

const book1 = new Book('ISBN-1', 'Clean Code', 'Robert Martin');
const book2 = new Book('ISBN-2', 'JavaScript: The Good Parts', 'Douglas Crockford');
const book3 = new Book('ISBN-3', 'Design Patterns', 'Gang of Four');

librarian.addBook(library, book1);
librarian.addBook(library, book2);
librarian.addBook(library, book3);

console.log('\n--- Borrowing ---');
member1.borrowBook(book1, library);
member1.borrowBook(book2, library);
member2.borrowBook(book3, library);

console.log('\n--- Search ---');
console.log('Search "Clean":', library.searchByTitle('Clean').map((b) => b.title));
console.log('Search author "Douglas":', library.searchByAuthor('Douglas').map((b) => b.title));

console.log('\n--- Stats ---');
console.log(library.getStats());

console.log('\n--- Describe (polymorphism) ---');
console.log(librarian.describe());
console.log(member1.describe());
console.log(member2.describe());

console.log('\n--- Return ---');
member1.returnBook('ISBN-1', library);
console.log('Member1 fines:', member1.getFines(library));

console.log('\n--- Final stats ---');
console.log(library.getStats());
