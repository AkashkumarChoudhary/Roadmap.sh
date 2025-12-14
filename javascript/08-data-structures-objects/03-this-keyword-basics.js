/**
 * ============================================
 * THE `this` KEYWORD IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND `this`?
 * ----------------------
 * The `this` keyword is one of JavaScript's most confusing concepts:
 * - Value depends on how function is called
 * - Different behavior in different contexts
 * - Essential for object-oriented programming
 * - Critical for understanding JavaScript
 * 
 * WHAT IS `this`?
 * ---------------
 * `this` refers to the object that is executing the current function:
 * - In methods: refers to the object
 * - In functions: depends on how called
 * - In arrow functions: inherited from enclosing scope
 * - Can be explicitly set with call/apply/bind
 * 
 * KEY CONCEPTS:
 * ------------
 * - Context-dependent
 * - Determined at runtime
 * - Different from other languages
 */

'use strict';

// ============================================
// `this` IN OBJECT METHODS
// ============================================

// In object methods, `this` refers to the object
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    getAge: function() {
        return this.age;
    }
};

console.log(person.greet()); // "Hello, I'm Alice"
console.log(person.getAge()); // 30

// `this` refers to the object that calls the method
let person2 = {
    name: "Bob",
    greet: person.greet // Reference to same function
};

console.log(person2.greet()); // "Hello, I'm Bob" (this is person2)

// ============================================
// `this` IN REGULAR FUNCTIONS
// ============================================

// In regular functions, `this` depends on how function is called

// Global context (non-strict mode)
function regularFunction() {
    console.log(this); // In browser: window, In Node: global
}

// regularFunction(); // `this` is global object

// Strict mode
function strictFunction() {
    'use strict';
    console.log(this); // undefined
}

// strictFunction(); // `this` is undefined

// ============================================
// `this` IN ARROW FUNCTIONS
// ============================================

// Arrow functions don't have their own `this`
// They inherit `this` from enclosing scope

let obj = {
    name: "Test",
    regular: function() {
        return this.name; // `this` is obj
    },
    arrow: () => {
        return this.name; // `this` is not obj (inherited from outer scope)
    }
};

console.log(obj.regular()); // "Test"
console.log(obj.arrow()); // undefined (or error in strict mode)

// Arrow functions preserve `this` from outer scope
let outer = {
    name: "Outer",
    inner: {
        name: "Inner",
        regular: function() {
            return this.name; // "Inner"
        },
        arrow: () => {
            return this.name; // "Outer" (from outer scope)
        }
    }
};

console.log(outer.inner.regular()); // "Inner"
console.log(outer.inner.arrow()); // "Outer"

// ============================================
// `this` IN EVENT HANDLERS
// ============================================

// In event handlers, `this` refers to the element
// button.addEventListener('click', function() {
//     console.log(this); // The button element
// });

// Arrow function in event handler
// button.addEventListener('click', () => {
//     console.log(this); // Not the button (inherited from outer scope)
// });

// ============================================
// EXPLICIT `this` BINDING
// ============================================

// call() - Call function with explicit `this`
function greet(greeting) {
    return `${greeting}, ${this.name}`;
}

let person3 = { name: "Alice" };
let person4 = { name: "Bob" };

console.log(greet.call(person3, "Hello")); // "Hello, Alice"
console.log(greet.call(person4, "Hi")); // "Hi, Bob"

// apply() - Similar to call, but arguments as array
console.log(greet.apply(person3, ["Hello"])); // "Hello, Alice"

// bind() - Create new function with bound `this`
let boundGreet = greet.bind(person3);
console.log(boundGreet("Hello")); // "Hello, Alice"

// ============================================
// `this` IN CONSTRUCTORS
// ============================================

// In constructors, `this` refers to the new instance
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

let person5 = new Person("Alice", 30);
console.log(person5.greet()); // "Hello, I'm Alice"

// ============================================
// `this` IN CLASSES
// ============================================

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Arrow method (bound to instance)
    arrowGreet = () => {
        return `Hello, I'm ${this.name}`;
    }
}

let person6 = new PersonClass("Bob", 25);
console.log(person6.greet()); // "Hello, I'm Bob"

// ============================================
// LOST `this` CONTEXT
// ============================================

// Common problem: losing `this` context
let obj2 = {
    name: "Test",
    getName: function() {
        return this.name;
    }
};

console.log(obj2.getName()); // "Test"

// Store method in variable (loses context)
let getNameFunc = obj2.getName;
console.log(getNameFunc()); // undefined (this is global/undefined)

// Solution 1: bind()
let boundGetName = obj2.getName.bind(obj2);
console.log(boundGetName()); // "Test"

// Solution 2: Arrow function (preserves this)
let obj3 = {
    name: "Test",
    getName: function() {
        return this.name;
    },
    getNameArrow: () => {
        return this.name; // Inherited from outer scope
    }
};

// Solution 3: Store reference to object
let obj4 = {
    name: "Test",
    getName: function() {
        const self = this;
        return function() {
            return self.name; // Uses self, not this
        };
    }
};

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Object with methods
let calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

calculator.add(10).subtract(3);
console.log(calculator.getValue()); // 7

// Example 2: Callback with `this`
let button = {
    clicked: 0,
    handleClick: function() {
        this.clicked++;
        console.log(`Clicked ${this.clicked} times`);
    }
};

// button.addEventListener('click', button.handleClick); // Loses context
// button.addEventListener('click', button.handleClick.bind(button)); // Preserves context

// Example 3: Method borrowing
let obj5 = {
    name: "Alice",
    greet: function() {
        return `Hello, ${this.name}`;
    }
};

let obj6 = {
    name: "Bob"
};

// Borrow method from obj5
console.log(obj5.greet.call(obj6)); // "Hello, Bob"

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. `this` in nested functions
let obj7 = {
    name: "Test",
    outer: function() {
        console.log(this.name); // "Test"
        function inner() {
            console.log(this.name); // undefined (this is global/undefined)
        }
        inner();
    }
};

obj7.outer();

// Solution: Arrow function or bind
let obj8 = {
    name: "Test",
    outer: function() {
        console.log(this.name); // "Test"
        const inner = () => {
            console.log(this.name); // "Test" (inherited)
        };
        inner();
    }
};

// 2. `this` in setTimeout
let obj9 = {
    name: "Test",
    delayed: function() {
        setTimeout(function() {
            console.log(this.name); // undefined (this is global/undefined)
        }, 100);
    }
};

// Solution: Arrow function
let obj10 = {
    name: "Test",
    delayed: function() {
        setTimeout(() => {
            console.log(this.name); // "Test" (inherited)
        }, 100);
    }
};

// 3. `this` in array methods
let obj11 = {
    items: [1, 2, 3],
    multiplier: 2,
    multiply: function() {
        return this.items.map(function(item) {
            return item * this.multiplier; // this is not obj11
        });
    }
};

// Solution: Arrow function
let obj12 = {
    items: [1, 2, 3],
    multiplier: 2,
    multiply: function() {
        return this.items.map(item => {
            return item * this.multiplier; // this is obj12
        });
    }
};

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use arrow functions to preserve `this`
// ✅ Good: setTimeout(() => { this.doSomething(); }, 100);

// 2. Use bind() when you need to pass method as callback
// ✅ Good: button.addEventListener('click', this.handleClick.bind(this));

// 3. Store `this` in variable if needed (self/that pattern)
// ✅ Good: const self = this; function() { self.doSomething(); }

// 4. Be aware of `this` in different contexts
// ⚠️ Warning: `this` value can be surprising

// 5. Use arrow functions in class methods if you want bound `this`
// ✅ Good: class MyClass { method = () => { this.doSomething(); } }

// ============================================
// SUMMARY
// ============================================

/**
 * `this` VALUE DEPENDS ON:
 * 
 * 1. Method call: obj.method() → `this` is obj
 * 2. Function call: func() → `this` is global/undefined
 * 3. Constructor: new Func() → `this` is new instance
 * 4. Arrow function: → `this` from enclosing scope
 * 5. call/apply/bind: → `this` is explicitly set
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an object with a method that uses `this`
// 2. Call the method and observe what `this` refers to
// 3. Store the method in a variable and call it (observe lost context)
// 4. Use bind() to preserve `this` context
// 5. Create an arrow function method and compare `this` behavior
// 6. Use call() to invoke a function with explicit `this`
// 7. Create a constructor function and observe `this` in it
// 8. Demonstrate `this` in a nested function (problem and solution)
// 9. Use arrow function to preserve `this` in a callback
// 10. Explain the difference between `this` in regular and arrow functions

