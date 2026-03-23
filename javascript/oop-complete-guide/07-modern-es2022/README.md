# Part 7: Modern JavaScript OOP (ES2022+)

## Features

### 1. Private fields and methods (`#`)

- `#field` and `#method()` are truly private — not accessible outside the class.
- No need for `_private` convention.
- Subclasses cannot access parent’s private fields directly.

### 2. Public class fields

- Declare instance properties in the class body: `name;`, `role = 'user';`.
- Initialized before the constructor runs.
- Arrow function fields keep `this` bound (handy for callbacks).

### 3. Static initialization blocks

- `static { ... }` runs once when the class is first loaded.
- Use for complex static setup, loading config, or registering plugins.

### 4. Static private fields

- `static #privateField` — shared and private to the class.

## Folder Structure

```
07-modern-es2022/
├── README.md
├── examples/
│   ├── 01-private-fields.js
│   ├── 02-public-class-fields.js
│   ├── 03-static-initialization-blocks.js
│   └── 04-complete-modern-example.js
└── exercises/
    └── 07-task-manager.js
```

## Node version

These examples use ES2022+ (private fields, etc.). Use Node 14.6+ or a modern browser.
