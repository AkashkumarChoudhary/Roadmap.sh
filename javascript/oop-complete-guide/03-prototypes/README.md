# Part 3: Prototypes and Prototype Chain

## Theory

### The Memory Problem

Defining methods inside the constructor gives every instance its own copy. For 1000 instances × 10 methods = 10,000 functions.

### What is a Prototype?

Every JavaScript object has an internal `[[Prototype]]` that points to another object. When you access a property:

1. Look on the object itself.
2. If not found, look on its prototype.
3. Repeat until the chain ends at `null`.

### Prototype Chain

```
instance → Constructor.prototype → Object.prototype → null
    ↓              ↓                     ↓
 [own]      [shared methods]      [toString, etc.]
```

### Why Use Prototypes?

- **Memory** — One method shared by all instances.
- **Dynamic updates** — Add/change methods for all instances at once.
- **Inheritance** — Build hierarchies of types.
- **Polymorphism** — Override in child prototypes.

### `__proto__` vs `prototype`

- **`prototype`** — Property on constructor functions; the object that will be used as the prototype of instances created with `new`.
- **`__proto__`** (or `Object.getPrototypeOf(obj)`) — The actual prototype of an instance.

For `const john = new Person('John')`:

- `john.__proto__ === Person.prototype` → true  
- `Person.prototype.constructor === Person` → true  

### Correct Inheritance Pattern

1. Call parent constructor: `Parent.call(this, ...)`.
2. Set prototype: `Child.prototype = Object.create(Parent.prototype)`.
3. Fix constructor: `Child.prototype.constructor = Child`.
4. Add child methods on `Child.prototype`.

### Pitfalls

- Modifying built-in prototypes (e.g. `Object.prototype`) can break other code.
- Forgetting to set `Child.prototype.constructor = Child`.
- Using `Child.prototype = Parent.prototype` (shared reference, no separate child prototype).

## Folder Structure

```
03-prototypes/
├── README.md
├── examples/
│   ├── 01-basic-prototype.js
│   ├── 02-vehicle-inheritance.js
│   └── 03-prototype-chain.js
└── exercises/
    └── 03-shapes.js
```
