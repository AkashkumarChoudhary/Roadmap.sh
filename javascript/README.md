# JavaScript Learning Repository

A comprehensive, folder-based JavaScript learning repository based on the [roadmap.sh](https://roadmap.sh/javascript) curriculum. Each module contains executable code, detailed explanations, edge cases, and practice tasks.

## 📁 Repository Structure

```
javascript/
├── 01-introduction-and-basics/
│   ├── 01-introduction-to-javascript.js
│   ├── 02-variables.js
│   ├── 03-data-types.js
│   └── 04-interaction.js
├── 02-type-conversion-and-coercion/
│   ├── 01-explicit-conversion.js
│   └── 02-implicit-coercion.js
├── 03-operators-and-expressions/
│   ├── 01-arithmetic-operators.js
│   ├── 02-assignment-operators.js
│   ├── 03-comparison-operators.js
│   ├── 04-logical-operators.js
│   ├── 05-bitwise-operators.js
│   ├── 06-type-operators.js
│   └── 07-ternary-operator.js
├── 04-control-flow/
│   ├── 01-conditional-branching.js
│   ├── 02-switch-statements.js
│   └── 03-exception-handling.js
├── 05-loops-and-iteration/
│   ├── 01-standard-loops.js
│   ├── 02-modern-iteration.js
│   └── 03-control-statements.js
├── 06-functions/
│   ├── 01-function-declarations-vs-expressions.js
│   ├── 02-arrow-functions.js
│   ├── 03-parameters-and-arguments.js
│   ├── 04-iife.js
│   ├── 05-recursion.js
│   ├── 06-scope.js
│   └── 07-closures.js
├── 07-data-structures-arrays/
│   ├── 01-basic-array-methods.js
│   ├── 02-iteration-methods.js
│   ├── 03-destructuring-arrays.js
│   └── 04-spread-operator.js
├── 08-data-structures-objects/
│   ├── 01-object-literals-and-properties.js
│   ├── 02-accessing-properties.js
│   ├── 03-this-keyword-basics.js
│   ├── 04-object-methods.js
│   ├── 05-optional-chaining.js
│   └── 06-destructuring-objects.js
├── 09-advanced-data-structures/
│   ├── 01-map-and-set.js
│   ├── 02-weakmap-and-weakset.js
│   └── 03-json.js
├── 10-object-oriented-programming/
│   ├── 01-prototypal-inheritance.js
│   ├── 02-classes.js
│   ├── 03-getters-and-setters.js
│   ├── 04-static-methods.js
│   └── 05-the-new-keyword.js
├── 11-asynchronous-javascript/
│   ├── 01-event-loop.js
│   ├── 02-callbacks.js
│   ├── 03-promises.js
│   └── 04-async-await.js
├── 12-modules-and-tools/
│   ├── 01-commonjs.js
│   ├── 02-es-modules.js
│   └── 03-npm.js
├── 13-the-dom/
│   ├── 01-dom-selectors.js
│   ├── 02-manipulating-elements.js
│   ├── 03-event-listeners.js
│   └── 04-traversing-the-dom.js
├── 14-advanced-concepts/
│   ├── 01-iterators-and-generators.js
│   ├── 02-memory-management.js
│   ├── 03-strict-mode.js
│   └── 04-debugging.js
└── README.md
```

## 🎯 How to Use This Repository

### 1. **Study Order**
   - Follow the numbered folders in sequence (01, 02, 03...)
   - Within each folder, study files in numerical order

### 2. **File Structure**
   Each file contains:
   - **Concept Explanation**: Comment blocks explaining the "Why" and "What"
   - **Code Examples**: Runnable code snippets demonstrating concepts
   - **Edge Cases**: Common mistakes and JavaScript quirks
   - **Practice Tasks**: TODO comments at the bottom for hands-on practice

### 3. **Running the Code**

#### In Browser:
```html
<!-- Create an HTML file and include the script -->
<script src="01-introduction-and-basics/01-introduction-to-javascript.js"></script>
```

#### In Node.js:
```bash
node 01-introduction-and-basics/01-introduction-to-javascript.js
```

#### Interactive Mode:
```bash
node -i -e "$(cat 01-introduction-and-basics/02-variables.js)"
```

### 4. **Practice Tasks**
   - Each file ends with a `TODO` section
   - Complete these tasks to reinforce learning
   - Modify the code, experiment, and break things!

## 📚 Module Overview

### ✅ Module 1: Introduction & The Basics
- **01-introduction-to-javascript.js**: History, versions, engines, characteristics
- **02-variables.js**: var, let, const, scoping, naming conventions
- **03-data-types.js**: All 7 primitive types + Object
- **04-interaction.js**: alert(), prompt(), confirm() (browser-specific)

### ✅ Module 2: Type Conversion & Coercion
- **01-explicit-conversion.js**: String(), Number(), Boolean(), parseInt(), parseFloat()
- **02-implicit-coercion.js**: Automatic type conversion, the weird parts of JS

### ✅ Module 3: Operators & Expressions
- **01-arithmetic-operators.js**: +, -, *, /, %, **, ++, --
- **02-assignment-operators.js**: =, +=, -=, *=, /=, %=, **=
- **03-comparison-operators.js**: ==, ===, !=, !==, <, >, <=, >=
- **04-logical-operators.js**: &&, ||, !, ?? (Nullish Coalescing)
- **05-bitwise-operators.js**: &, |, ^, ~, <<, >>, >>>
- **06-type-operators.js**: typeof, instanceof
- **07-ternary-operator.js**: condition ? true : false

### ✅ Module 4: Control Flow
- **01-conditional-branching.js**: if, else if, else statements
- **02-switch-statements.js**: switch, case, break, default
- **03-exception-handling.js**: try, catch, finally, throw

### ✅ Module 5: Loops & Iteration
- **01-standard-loops.js**: for, while, do...while loops
- **02-modern-iteration.js**: for...of, for...in loops
- **03-control-statements.js**: break, continue, labels

### ✅ Module 6: Functions (The Core)
- **01-function-declarations-vs-expressions.js**: Function declarations vs expressions, hoisting
- **02-arrow-functions.js**: Arrow function syntax, lexical `this`
- **03-parameters-and-arguments.js**: Default params, rest parameters, named parameters
- **04-iife.js**: Immediately Invoked Function Expressions
- **05-recursion.js**: Recursive functions, base cases, memoization
- **06-scope.js**: Global, function, and block scope
- **07-closures.js**: Lexical scoping, persistent state, private variables

### ✅ Module 7: Data Structures - Arrays
- **01-basic-array-methods.js**: push, pop, shift, unshift, splice, slice
- **02-iteration-methods.js**: forEach, map, filter, reduce, find, some, every
- **03-destructuring-arrays.js**: Array destructuring, default values, rest operator
- **04-spread-operator.js**: Spread operator with arrays, copying, combining

### ✅ Module 8: Data Structures - Objects
- **01-object-literals-and-properties.js**: Object literals, properties, methods, computed properties
- **02-accessing-properties.js**: Dot notation vs bracket notation, dynamic access
- **03-this-keyword-basics.js**: `this` in different contexts, binding, arrow functions
- **04-object-methods.js**: Object.keys, Object.values, Object.entries, Object.assign
- **05-optional-chaining.js**: Safe property access with `?.` operator
- **06-destructuring-objects.js**: Object destructuring, renaming, defaults, nested

### ✅ Module 9: Advanced Data Structures
- **01-map-and-set.js**: Map and Set collections, iteration, use cases
- **02-weakmap-and-weakset.js**: WeakMap and WeakSet, weak references, garbage collection
- **03-json.js**: JSON.stringify(), JSON.parse(), data serialization

### ✅ Module 10: Object Oriented Programming (OOP)
- **01-prototypal-inheritance.js**: Prototype chain, Object.create(), inheritance patterns
- **02-classes.js**: ES6 classes, extends, super, inheritance
- **03-getters-and-setters.js**: Property accessors, computed properties, validation
- **04-static-methods.js**: Static methods, utility functions, factory methods
- **05-the-new-keyword.js**: Object instantiation, constructor functions, prototype binding

### ✅ Module 11: Asynchronous JavaScript
- **01-event-loop.js**: Call stack, callback queue, microtasks vs macrotasks
- **02-callbacks.js**: Callback functions, error-first callbacks, callback hell
- **03-promises.js**: Promise creation, .then(), .catch(), .finally(), Promise.all()
- **04-async-await.js**: async/await syntax, error handling, sequential vs parallel

### ✅ Module 12: Modules & Tools
- **01-commonjs.js**: require(), module.exports, Node.js modules
- **02-es-modules.js**: import/export, ES6 modules, static analysis
- **03-npm.js**: package.json, npm install, dependencies, scripts

### ✅ Module 13: The DOM (Browser Context)
- **01-dom-selectors.js**: getElementById, querySelector, CSS selectors
- **02-manipulating-elements.js**: innerHTML, textContent, style, classList
- **03-event-listeners.js**: addEventListener, event object, bubbling, delegation
- **04-traversing-the-dom.js**: parent, children, siblings, DOM navigation

### ✅ Module 14: Advanced Concepts
- **01-iterators-and-generators.js**: Iterators, generators, yield, Symbol.iterator
- **02-memory-management.js**: Garbage collection, memory leaks, weak references
- **03-strict-mode.js**: 'use strict', restrictions, best practices
- **04-debugging.js**: Console methods, breakpoints, DevTools, debugging techniques

## 💡 Learning Tips

1. **Read the Comments**: Each file has extensive comments explaining concepts
2. **Run the Code**: Don't just read - execute and see the output
3. **Experiment**: Modify the examples and see what happens
4. **Complete TODOs**: Practice tasks reinforce learning
5. **Break Things**: Intentionally cause errors to understand limits
6. **Use Console**: Open browser DevTools or Node.js REPL for experimentation

## 🔧 Prerequisites

- Basic understanding of programming concepts
- Node.js installed (for running outside browser) OR
- A modern web browser with DevTools

## 📖 Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [Roadmap.sh JavaScript Path](https://roadmap.sh/javascript)

## 🎓 Learning Path

Follow this sequence for optimal learning:

1. **Foundation** (Modules 1-2): Basics, types, variables, coercion
2. **Control Structures** (Modules 3-5): Operators, conditionals, loops
3. **Functions & Data** (Modules 6-9): Functions, arrays, objects, advanced structures
4. **Advanced Topics** (Modules 10-14): OOP, async, modules, DOM, advanced concepts

## ✅ Repository Status

**COMPLETE!** All 14 modules have been created with comprehensive content:
- **Total Files**: 58 JavaScript files
- **Total Modules**: 14 complete modules
- **Coverage**: Complete roadmap.sh JavaScript curriculum
- **Format**: Each file includes explanations, examples, edge cases, and practice tasks

## ⚠️ Important Notes

- **Browser vs Node.js**: Some code (like `alert()`, `prompt()`) only works in browsers
- **Strict Mode**: All files use `'use strict'` for safer JavaScript
- **Modern JavaScript**: Focuses on ES6+ features while explaining legacy code
- **Best Practices**: Each file includes best practices and common pitfalls

## 🤝 Contributing

This is a learning repository. Feel free to:
- Add your own examples
- Document your learnings
- Create additional practice exercises
- Share insights and discoveries

---

**Happy Learning! 🚀**

*Remember: The best way to learn JavaScript is by writing JavaScript. Code, experiment, break things, and learn from mistakes!*

