/**
 * ============================================
 * PROTOTYPAL INHERITANCE IN JAVASCRIPT
 * ============================================
 * 
 * WHY PROTOTYPAL INHERITANCE?
 * ----------------------------
 * JavaScript uses prototypal inheritance (not classical):
 * - Objects inherit from other objects
 * - Flexible and dynamic
 * - Foundation of JavaScript's OOP
 * - Understanding this is crucial for advanced JavaScript
 * 
 * WHAT IS PROTOTYPAL INHERITANCE?
 * --------------------------------
 * Objects can inherit properties and methods from other objects:
 * - Every object has a prototype
 * - Prototype chain: Object → Prototype → null
 * - Properties are looked up through the chain
 * - Dynamic: Can modify prototype at runtime
 * 
 * KEY CONCEPTS:
 * ------------
 * - __proto__ / Object.getPrototypeOf()
 * - prototype property (functions)
 * - Prototype chain
 * - hasOwnProperty()
 */

'use strict';

// ============================================
// PROTOTYPE CHAIN
// ============================================

// Every object has a prototype (except Object.prototype)
let obj = { name: "Alice" };

// Access prototype
console.log(Object.getPrototypeOf(obj)); // Object.prototype
console.log(obj.__proto__); // Object.prototype (deprecated, but widely used)

// Prototype chain
console.log(Object.getPrototypeOf(Object.prototype)); // null (end of chain)

// ============================================
// PROPERTY LOOKUP
// ============================================

// JavaScript looks up properties through prototype chain
let parent = {
    greet: function() {
        return "Hello";
    },
    name: "Parent"
};

let child = Object.create(parent);
child.age = 30;

console.log(child.age); // 30 (own property)
console.log(child.name); // "Parent" (inherited)
console.log(child.greet()); // "Hello" (inherited)

// Check if property is own
console.log(child.hasOwnProperty("age")); // true
console.log(child.hasOwnProperty("name")); // false (inherited)

// ============================================
// OBJECT.CREATE()
// ============================================

// Create object with specified prototype
let animal = {
    makeSound: function() {
        return "Some sound";
    }
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";
dog.bark = function() {
    return "Woof!";
};

console.log(dog.bark()); // "Woof!" (own method)
console.log(dog.makeSound()); // "Some sound" (inherited)

// Create with null prototype (no inheritance)
let noProto = Object.create(null);
console.log(Object.getPrototypeOf(noProto)); // null
// noProto.toString(); // TypeError: noProto.toString is not a function

// ============================================
// CONSTRUCTOR FUNCTIONS
// ============================================

// Constructor functions have a prototype property
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype (shared by all instances)
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

// Create instances
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person2.greet()); // "Hello, I'm Bob"

// Methods are shared (same function reference)
console.log(person1.greet === person2.greet); // true

// Properties are own (different values)
console.log(person1.name); // "Alice"
console.log(person2.name); // "Bob"

// ============================================
// PROTOTYPE CHAIN EXAMPLE
// ============================================

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set Dog prototype to Animal instance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix constructor reference

Dog.prototype.bark = function() {
    return `${this.name} is barking`;
};

let myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.bark()); // "Buddy is barking" (own method)
console.log(myDog.eat()); // "Buddy is eating" (inherited)

// Prototype chain: myDog → Dog.prototype → Animal.prototype → Object.prototype → null

// ============================================
// MODIFYING PROTOTYPE
// ============================================

// Prototypes can be modified at runtime
let obj2 = {};
console.log(obj2.toString); // [Function: toString] (from Object.prototype)

// Modify Object.prototype (affects all objects - not recommended!)
// Object.prototype.customMethod = function() {
//     return "Custom";
// };
// console.log(obj2.customMethod()); // "Custom" (now available on all objects)

// Better: Modify specific prototype
function MyClass() {}
MyClass.prototype.customMethod = function() {
    return "Custom";
};

let instance = new MyClass();
console.log(instance.customMethod()); // "Custom"

// ============================================
// PROPERTY SHADOWING
// ============================================

// Child can override parent properties
let parent2 = {
    value: "parent"
};

let child2 = Object.create(parent2);
console.log(child2.value); // "parent" (inherited)

// Shadow (override) parent property
child2.value = "child";
console.log(child2.value); // "child" (own property)
console.log(parent2.value); // "parent" (unchanged)

// Access parent property (if needed)
console.log(Object.getPrototypeOf(child2).value); // "parent"

// ============================================
// CHECKING PROTOTYPE
// ============================================

// instanceof operator
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);

let child3 = new Child();
console.log(child3 instanceof Child); // true
console.log(child3 instanceof Parent); // true
console.log(child3 instanceof Object); // true

// isPrototypeOf()
let parent3 = { name: "Parent" };
let child4 = Object.create(parent3);
console.log(parent3.isPrototypeOf(child4)); // true

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(child4) === parent3); // true

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Mixin pattern
let canFly = {
    fly: function() {
        return `${this.name} is flying`;
    }
};

let canSwim = {
    swim: function() {
        return `${this.name} is swimming`;
    }
};

function Bird(name) {
    this.name = name;
}

// Mix in behaviors
Object.assign(Bird.prototype, canFly);

let bird = new Bird("Eagle");
console.log(bird.fly()); // "Eagle is flying"

// Example 2: Composition over inheritance
function createAnimal(name) {
    return {
        name,
        eat: function() {
            return `${this.name} is eating`;
        }
    };
}

function createDog(name, breed) {
    let animal = createAnimal(name);
    return Object.assign(animal, {
        breed,
        bark: function() {
            return `${this.name} is barking`;
        }
    });
}

let dog2 = createDog("Buddy", "Golden");
console.log(dog2.eat()); // "Buddy is eating"
console.log(dog2.bark()); // "Buddy is barking"

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Modifying prototype affects all instances
function MyClass() {}
let instance1 = new MyClass();
let instance2 = new MyClass();

MyClass.prototype.newMethod = function() {
    return "New";
};

console.log(instance1.newMethod()); // "New" (available on existing instances!)
console.log(instance2.newMethod()); // "New"

// 2. Setting prototype to null
let obj3 = Object.create(null);
// obj3.toString(); // TypeError (no Object.prototype)

// 3. Circular prototype chain (not possible, but be careful)
// let a = {};
// let b = Object.create(a);
// Object.setPrototypeOf(a, b); // Creates circular chain (bad!)

// 4. hasOwnProperty can be overridden
let obj4 = {
    hasOwnProperty: function() {
        return false;
    }
};

// Safer check
console.log(Object.prototype.hasOwnProperty.call(obj4, "prop"));

// 5. __proto__ is deprecated (use Object.getPrototypeOf/setPrototypeOf)
let obj5 = {};
// obj5.__proto__ = parent; // Deprecated
Object.setPrototypeOf(obj5, parent); // Preferred

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use Object.create() for inheritance
// ✅ Good: let child = Object.create(parent);

// 2. Use Object.getPrototypeOf() instead of __proto__
// ✅ Good: Object.getPrototypeOf(obj)
// ⚠️ Deprecated: obj.__proto__

// 3. Don't modify built-in prototypes
// ❌ Bad: Object.prototype.customMethod = ...

// 4. Use hasOwnProperty() to check own properties
// ✅ Good: obj.hasOwnProperty("prop")

// 5. Fix constructor reference when setting prototype
// ✅ Good: Child.prototype.constructor = Child;

// ============================================
// SUMMARY
// ============================================

/**
 * PROTOTYPAL INHERITANCE:
 * - Objects inherit from other objects
 * - Prototype chain: obj → prototype → null
 * - Properties looked up through chain
 * - Dynamic: Can modify at runtime
 * - Flexible: Multiple inheritance patterns possible
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an object and access its prototype
// 2. Use Object.create() to create an object with a prototype
// 3. Create a constructor function and add methods to its prototype
// 4. Demonstrate property lookup through prototype chain
// 5. Use hasOwnProperty() to distinguish own vs inherited properties
// 6. Create inheritance using Object.create()
// 7. Demonstrate property shadowing
// 8. Use instanceof to check prototype chain
// 9. Modify a prototype and observe effect on existing instances
// 10. Explain the difference between __proto__ and prototype property

