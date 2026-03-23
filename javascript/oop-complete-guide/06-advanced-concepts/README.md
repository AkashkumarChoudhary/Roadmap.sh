# Part 6: Advanced OOP Concepts

## Topics

1. **Static methods and properties** — Belong to the class, not instances (e.g. `User.validateEmail()`, `User.userCount`).
2. **Instance vs static** — Instance: unique per object, `this` = instance. Static: shared, `this` = class.
3. **Composition vs inheritance** — Favor composition: build behavior by combining small parts (mixins, objects) instead of deep inheritance.
4. **Mixins** — Add behavior to classes without inheritance; “ingredients” mixed into classes.
5. **Factory functions vs classes** — Factories return objects (no `new`), can use closures for real privacy; classes give `instanceof`, `extends`, and familiar OOP syntax.

## Folder Structure

```
06-advanced-concepts/
├── README.md
├── examples/
│   ├── 01-static-methods.js
│   ├── 02-composition.js
│   ├── 03-mixins.js
│   └── 04-factory-vs-class.js
└── exercises/
    └── 06-shopping-cart-mixins.js
```
