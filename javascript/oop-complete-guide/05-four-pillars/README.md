# Part 5: The Four Pillars of OOP

## 1. Encapsulation

Bundles data and methods that operate on that data and restricts direct access to some components.

- **Why:** Data protection, controlled access via getters/setters, easier maintenance and debugging.
- **In JS:** Convention (`_private`), or real privacy with `#` (ES2022+).

## 2. Abstraction

Hides complex implementation and exposes only what’s needed.

- **Why:** Less complexity for users, changes to implementation don’t break the public API.
- **In JS:** Public methods as interface; internal helpers or private methods for details.

## 3. Inheritance

A class gets properties and methods from another class.

- **Why:** Reuse code, model hierarchies, enable polymorphism.
- **In JS:** `extends` and `super`, or constructor + `Object.create` for pre-ES6.

## 4. Polymorphism

Same interface, different behavior (e.g. different types implementing the same method).

- **Why:** Treat different objects uniformly, add new types without changing existing code.
- **In JS:** Method overriding in subclasses; no native method overloading (can simulate with rest args).

## Folder Structure

```
05-four-pillars/
├── README.md
├── 01-encapsulation.js
├── 02-abstraction.js
├── 03-inheritance.js
├── 04-polymorphism.js
└── exercises/
    └── 05-school-system.js
```
