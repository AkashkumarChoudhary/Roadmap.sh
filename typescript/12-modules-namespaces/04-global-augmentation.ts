export { };

/**
 * MODULE 12: MODULES & NAMESPACES
 * Topic: Global Augmentation
 * 
 * THEORY:
 * Sometimes you need to add properties to global objects like `Window` or `Array`.
 * You can use `declare global`.
 */

// --- CODE: Global Augmentation ---

declare global {
    interface Window {
        myCustomGlobal: string;
    }

    // Adding a method to Array
    interface Array<T> {
        last(): T | undefined;
    }
}

// Now we can use it (if this was a real runtime environment)
// window.myCustomGlobal = "Hello";

// To implement the Array method, we would extend the prototype (in JS):
// Array.prototype.last = function() { return this[this.length - 1]; };

// --- TASK ---
// TODO: Augment the `String` interface to add a method `toTitleCase(): string`.
