/**
 * ============================================
 * ITERATORS AND GENERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ITERATORS AND GENERATORS?
 * -----------------------------
 * Iterators and generators provide powerful iteration patterns:
 * - Custom iteration behavior
 * - Lazy evaluation
 * - Infinite sequences
 * - Better control over iteration
 * - Foundation for async generators
 * 
 * WHAT ARE ITERATORS?
 * -------------------
 * Objects that define how to iterate:
 * - next() method returns { value, done }
 * - Implements Iterator protocol
 * - Used by for...of, spread, destructuring
 * 
 * WHAT ARE GENERATORS?
 * -------------------
 * Functions that can be paused and resumed:
 * - function* syntax
 * - yield keyword
 * - Returns generator object (iterator)
 * - Lazy evaluation
 */

'use strict';

// ============================================
// ITERATORS
// ============================================

// Iterator protocol: object with next() method
let iterator = {
    values: [1, 2, 3],
    index: 0,
    next() {
        if (this.index < this.values.length) {
            return { value: this.values[this.index++], done: false };
        }
        return { done: true };
    }
};

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { done: true }

// ============================================
// ITERABLE PROTOCOL
// ============================================

// Iterable: object with Symbol.iterator method
let iterable = {
    values: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.values.length) {
                    return { value: this.values[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

// Can use with for...of
for (let value of iterable) {
    console.log(value); // 1, 2, 3
}

// ============================================
// GENERATORS - BASIC SYNTAX
// ============================================

// Generator function (function*)
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Generator returns iterator
let gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { done: true }

// ============================================
// GENERATORS WITH FOR...OF
// ============================================

// Generators are iterable
function* countToFive() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for (let num of countToFive()) {
    console.log(num); // 1, 2, 3, 4, 5
}

// ============================================
// GENERATOR WITH YIELD
// ============================================

// yield pauses execution and returns value
function* simpleGenerator() {
    console.log("Start");
    yield "First";
    console.log("Middle");
    yield "Second";
    console.log("End");
}

let gen2 = simpleGenerator();
console.log(gen2.next()); // "Start", { value: "First", done: false }
console.log(gen2.next()); // "Middle", { value: "Second", done: false }
console.log(gen2.next()); // "End", { done: true }

// ============================================
// GENERATORS WITH PARAMETERS
// ============================================

// Pass values to generator via next()
function* generatorWithInput() {
    let value = yield "First";
    console.log("Received:", value);
    yield "Second";
}

let gen3 = generatorWithInput();
console.log(gen3.next()); // { value: "First", done: false }
console.log(gen3.next("Hello")); // "Received: Hello", { value: "Second", done: false }

// ============================================
// INFINITE GENERATORS
// ============================================

// Generators can be infinite
function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

let infinite = infiniteNumbers();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2
// Can continue indefinitely

// ============================================
// GENERATOR DELEGATION
// ============================================

// yield* delegates to another generator
function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}

function* combined() {
    yield* generator1();
    yield* generator2();
}

for (let value of combined()) {
    console.log(value); // 1, 2, 3, 4
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Range generator
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of range(1, 5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Example 2: Fibonacci generator
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

let fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

// Example 3: Array chunking
function* chunkArray(array, size) {
    for (let i = 0; i < array.length; i += size) {
        yield array.slice(i, i + size);
    }
}

let chunks = chunkArray([1, 2, 3, 4, 5, 6], 2);
for (let chunk of chunks) {
    console.log(chunk); // [1, 2], [3, 4], [5, 6]
}

// Example 4: Custom iterable
let customRange = {
    start: 1,
    end: 5,
    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) {
            yield i;
        }
    }
};

for (let num of customRange) {
    console.log(num); // 1, 2, 3, 4, 5
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Generator state persists
function* stateful() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

let gen4 = stateful();
console.log(gen4.next().value); // 0
console.log(gen4.next().value); // 1
// State persists between calls

// 2. Generator can't be called directly
// numberGenerator(); // Returns generator object, doesn't execute

// 3. yield only works in generator functions
// function regular() {
//     yield 1; // SyntaxError
// }

// 4. return in generator
function* withReturn() {
    yield 1;
    return "Done";
    yield 2; // Never reached
}

let gen5 = withReturn();
console.log(gen5.next()); // { value: 1, done: false }
console.log(gen5.next()); // { value: "Done", done: true }

// 5. Generator methods
let gen6 = numberGenerator();
console.log(gen6.return("Early")); // { value: "Early", done: true }
// console.log(gen6.next()); // { done: true } (generator closed)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use generators for lazy evaluation
// ✅ Good: Generate values on demand

// 2. Use for infinite sequences
// ✅ Good: Infinite generators with while(true)

// 3. Use yield* for delegation
// ✅ Good: yield* otherGenerator()

// 4. Handle generator completion
// ✅ Good: Check done property

// 5. Use generators for custom iteration
// ✅ Good: Implement Symbol.iterator with generator

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a generator function that yields numbers 1 to 10
// 2. Use a generator with for...of loop
// 3. Create an infinite generator
// 4. Pass values to a generator using next()
// 5. Use yield* to delegate to another generator
// 6. Create a custom iterable using Symbol.iterator
// 7. Create a Fibonacci sequence generator
// 8. Create a generator that chunks an array
// 9. Explain the difference between iterator and generator
// 10. Create a generator that yields values based on conditions

