# Part 8: Final Project — Library Management System

A complete Library Management System using all OOP concepts from the guide.

## Requirements

- **Book** — Private fields for sensitive data, getters for safe access
- **Person** — Base class with name, age, greet()
- **Member** — Extends Person; memberId, borrowedBooks[], tier (regular/premium)
- **Librarian** — Extends Person; employeeId, special privileges (add/remove books, manage members)
- **Library** — Singleton; manages books, members, borrowing, returning, fines, reservations, search, stats

## Concepts Used

- **Encapsulation** — Private fields (#), validated setters
- **Abstraction** — Hide fine calculation, search internals
- **Inheritance** — Member, Librarian extend Person
- **Polymorphism** — describe() overridden in Member/Librarian; different member tiers
- **Static** — Library instance counter, default config, factory methods
- **Mixins** (optional) — Reservable, Renewable behaviors
- **Factory** — createMember(type, ...) for regular vs premium members
- **Static init** — Load default settings when Library class loads

## Folder Structure

```
08-final-project/
├── README.md
├── library-management/
│   ├── Person.js
│   ├── Book.js
│   ├── Member.js
│   ├── Librarian.js
│   ├── Library.js
│   ├── mixins.js
│   └── index.js      (run demo)
└── run-demo.js       (entry point)
```

## Run

From repo root:

```bash
node javascript/oop-complete-guide/08-final-project/run-demo.cjs
```

Or from this folder:

```bash
node run-demo.cjs
```
