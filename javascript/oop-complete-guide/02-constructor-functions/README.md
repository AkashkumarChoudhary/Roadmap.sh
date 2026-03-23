# Part 2: Constructor Functions

## Theory

### The Problem with Object Literals

Creating many similar objects (e.g. 100 users) with literals is tedious and memory-inefficient.

### What are Constructor Functions?

Blueprints or “cookie cutters” that define what properties and methods objects of a type should have.

### Why Use Them?

- **Reusability** — Multiple instances from one blueprint
- **Memory efficiency** — Methods can be shared via prototype (see Part 3)
- **Instance tracking** — Each object knows its type (`instanceof`)
- **Initialization** — Consistent initial state

### What Happens with `new`

1. A new empty object `{}` is created.
2. `this` is bound to that object.
3. The function body runs (assigns properties to `this`).
4. The new object is returned (unless you explicitly return something else).

### Pitfalls

- **Forgetting `new`** — `this` becomes global (e.g. `window` in browsers).
- **Methods in constructor** — Each instance gets its own function copy (wasteful).
- **Arrow functions as constructors** — Don’t work (no `this` binding).

### Best Practices

- Use **PascalCase** for constructor names.
- Always use the `new` keyword.
- Put methods on the **prototype** (Part 3).
- Validate arguments in the constructor.
- Don’t return a value from the constructor (let it return `this`).

### Safe Constructor Pattern

Use `new.target` (or `this instanceof Constructor`) to throw if called without `new`.

## Folder Structure

```
02-constructor-functions/
├── README.md
├── examples/
│   ├── 01-basic-constructor.js
│   ├── 02-product-constructor.js
│   └── 03-safe-constructor.js
└── exercises/
    └── 02-library-book.js
```
