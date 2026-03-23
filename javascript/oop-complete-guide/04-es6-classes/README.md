# Part 4: ES6 Classes

## Theory

### Why Classes?

Constructor + prototype syntax is verbose and unfamiliar to developers from class-based languages. ES6 classes are **syntactic sugar** over the same mechanism.

### Benefits

- Cleaner, more readable syntax
- Built-in inheritance with `extends` and `super`
- Straightforward static methods
- Familiar to OOP developers
- Modern support for private fields (`#`) in ES2022+

### Key Syntax

- **constructor** — Runs when `new ClassName()` is called.
- **Instance methods** — Defined in the class body; end up on `ClassName.prototype`.
- **Static methods** — Called on the class: `ClassName.staticMethod()`.
- **Getters/setters** — `get prop()` / `set prop(v)` for computed or validated properties.
- **extends** — Child class inherits from parent; must call `super()` before using `this` in constructor.

### Pitfalls

- **No hoisting** — Class declarations are not hoisted like function declarations.
- **No commas** between method definitions (unlike object literals).
- **Must use `new`** — Calling the class as a function throws.
- **No private methods** in older JS — Use `#` (ES2022+) or convention (`_method`).

### Best Practices

- Use PascalCase for class names.
- Keep constructors focused on initialization.
- Call `super()` in child constructors before using `this`.
- Use getters/setters for computed or validated properties.
- Prefer composition over very deep inheritance when it simplifies design.

## Folder Structure

```
04-es6-classes/
├── README.md
├── examples/
│   ├── 01-basic-class.js
│   ├── 02-ecommerce-class.js
│   ├── 03-getters-setters.js
│   └── 04-method-chaining.js
└── exercises/
    └── 04-library-system.js
```
