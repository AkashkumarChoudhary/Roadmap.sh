# Part 1: Objects and Object Literals

## Theory

### What are Objects?

Objects bundle **properties** (data) and **methods** (functions). Like a car: it has color, brand, model and can start, stop, honk.

### Why Use Objects?

- **Organization** — Group related data and behavior
- **Reusability** — Create multiple similar objects
- **Real-world modeling** — Represent entities in code
- **State management** — Track an entity's current state

### When to Use Object Literals

- One-off objects (no need for many instances)
- Configuration objects
- Namespace patterns
- Data transfer objects

### Common Pitfalls

- **Shallow copies** — `const newObj = obj` creates a reference, not a copy
- **`this` context loss** — Methods passed as callbacks can lose `this`
- **No true privacy** — Convention-based only (e.g. `_private`)
- **Property name conflicts** — Dynamic keys can clash

### Best Practices

- Use `const` for object declarations
- Group related properties and methods
- Use descriptive names
- Use getters/setters for validation when needed
- Copy with spread `{ ...obj }` or deep copy when necessary

## Folder Structure

```
01-objects-and-literals/
├── README.md           (this file)
├── examples/
│   ├── 01-simple-object.js
│   ├── 02-user-management.js
│   └── 03-copying-objects.js
└── exercises/
    └── 01-bank-account.js
```

## Run Examples

```bash
node examples/01-simple-object.js
node examples/02-user-management.js
node examples/03-copying-objects.js
```
