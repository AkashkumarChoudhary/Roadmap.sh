export { };

/**
 * MODULE 12: MODULES & NAMESPACES
 * Topic: Namespaces
 * 
 * THEORY:
 * Before ES Modules, TypeScript used "Namespaces" (formerly "Internal Modules") to organize code.
 * 
 * They are largely deprecated in favor of ES Modules, but you might see them in:
 * 1. Legacy code.
 * 2. .d.ts definition files (DefinitelyTyped).
 */

// --- CODE: Namespaces ---

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

// Usage
const validator = new Validation.LettersOnlyValidator();
console.log(validator.isAcceptable("Hello")); // true

// --- TASK ---
// TODO: Add a `ZipCodeValidator` class to the `Validation` namespace.
// It should check if a string is 5 digits.
