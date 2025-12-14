/**
 * ============================================
 * CONDITIONAL BRANCHING IN JAVASCRIPT
 * ============================================
 * 
 * WHY CONDITIONAL BRANCHING?
 * --------------------------
 * Conditional statements allow your program to make decisions and execute
 * different code based on conditions. They're fundamental for controlling
 * program flow and implementing logic.
 * 
 * WHAT IS CONDITIONAL BRANCHING?
 * ------------------------------
 * Statements that execute code based on whether a condition is true or false:
 * - if - Execute code if condition is true
 * - else - Execute code if condition is false
 * - else if - Check additional conditions
 * 
 * KEY CONCEPTS:
 * ------------
 * - Conditions are evaluated as truthy/falsy
 * - Code blocks use curly braces {}
 * - Can be nested for complex logic
 * - Early returns can simplify code
 */

'use strict';

// ============================================
// 1. IF STATEMENT
// ============================================

// Basic if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// Single line (no braces needed for one statement, but recommended)
if (age >= 18) console.log("Adult");

// With braces (recommended for clarity)
if (age >= 18) {
    console.log("You are an adult");
    console.log("You can vote");
}

// ============================================
// 2. IF-ELSE STATEMENT
// ============================================

let temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside");
} else {
    console.log("It's not too hot");
}

// ============================================
// 3. IF-ELSE IF-ELSE STATEMENT
// ============================================

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Multiple conditions
let hour = 14;
if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// ============================================
// TRUTHY AND FALSY IN CONDITIONS
// ============================================

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

// These all evaluate to false:
if (false) console.log("Won't run");
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
if (undefined) console.log("Won't run");
if (NaN) console.log("Won't run");

// These all evaluate to true:
if (true) console.log("Will run");
if (1) console.log("Will run");
if ("hello") console.log("Will run");
if ([]) console.log("Will run"); // Empty array is truthy!
if ({}) console.log("Will run"); // Empty object is truthy!

// ============================================
// COMPLEX CONDITIONS
// ============================================

// Using logical operators
let userAge = 25;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
    console.log("Can drive");
}

if (userAge < 18 || !hasLicense) {
    console.log("Cannot drive");
}

// Multiple conditions
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work today!");
}

// ============================================
// NESTED IF STATEMENTS
// ============================================

let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Administrator");
    } else if (userRole === "user") {
        console.log("Welcome, User");
    } else {
        console.log("Welcome, Guest");
    }
} else {
    console.log("Please log in");
}

// Flattened version (often better):
if (isLoggedIn && userRole === "admin") {
    console.log("Welcome, Administrator");
} else if (isLoggedIn && userRole === "user") {
    console.log("Welcome, User");
} else if (isLoggedIn) {
    console.log("Welcome, Guest");
} else {
    console.log("Please log in");
}

// ============================================
// EARLY RETURNS (GUARD CLAUSES)
// ============================================

// Instead of nested if-else, use early returns
function processUser(user) {
    // Early return for invalid input
    if (!user) {
        return "No user provided";
    }
    
    // Early return for missing name
    if (!user.name) {
        return "User name is required";
    }
    
    // Main logic
    return `Processing user: ${user.name}`;
}

// This is cleaner than:
function processUserNested(user) {
    if (user) {
        if (user.name) {
            return `Processing user: ${user.name}`;
        } else {
            return "User name is required";
        }
    } else {
        return "No user provided";
    }
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Age verification
function checkAge(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age < 13) {
        return "Child";
    } else if (age < 18) {
        return "Teenager";
    } else if (age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}

// Example 2: Login validation
function validateLogin(username, password) {
    if (!username) {
        return "Username is required";
    }
    
    if (!password) {
        return "Password is required";
    }
    
    if (username.length < 3) {
        return "Username must be at least 3 characters";
    }
    
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }
    
    return "Valid";
}

// Example 3: Discount calculation
function calculatePrice(price, userType) {
    let discount = 0;
    
    if (userType === "premium") {
        discount = 0.2; // 20% discount
    } else if (userType === "regular") {
        discount = 0.1; // 10% discount
    }
    
    return price * (1 - discount);
}

// Example 4: Time-based greeting
function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 17) {
        return "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "Good evening";
    } else {
        return "Good night";
    }
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Assignment vs comparison
let x = 5;
// ❌ Wrong: if (x = 10) { ... } // Assigns 10 to x, always truthy!
// ✅ Right: if (x === 10) { ... } // Compares

// 2. Falsy values
let value = 0;
if (value) {
    console.log("This won't run"); // 0 is falsy
} else {
    console.log("This will run");
}

// To check for zero explicitly:
if (value === 0) {
    console.log("Value is zero");
}

// 3. Null/undefined checks
let user = null;
if (user) {
    console.log("User exists");
} else {
    console.log("No user"); // This runs
}

// Explicit check:
if (user === null) {
    console.log("User is null");
}

// 4. String comparison
let str1 = "hello";
let str2 = "hello";
if (str1 === str2) {
    console.log("Strings are equal");
}

// 5. Array/object comparison
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
if (arr1 === arr2) {
    console.log("This won't run"); // Different objects
}

// 6. NaN comparison
let result = NaN;
if (result === NaN) {
    console.log("This won't run"); // NaN !== NaN
}
if (Number.isNaN(result)) {
    console.log("This will run"); // Correct way
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use strict equality (===) instead of loose (==)
// ❌ Bad: if (value == 5) { ... }
// ✅ Good: if (value === 5) { ... }

// 2. Use early returns to reduce nesting
// ❌ Bad: Deeply nested if-else
// ✅ Good: Early returns with guard clauses

// 3. Use descriptive condition names
// ❌ Bad: if (x) { ... }
// ✅ Good: if (isLoggedIn) { ... }

// 4. Use braces even for single statements
// ❌ Bad: if (condition) doSomething();
// ✅ Good: if (condition) { doSomething(); }

// 5. Keep conditions simple
// ❌ Bad: if (a && b && c && d && e) { ... }
// ✅ Good: Extract to variable or function

// 6. Use else if for mutually exclusive conditions
// ✅ Good: if (a) { ... } else if (b) { ... } else { ... }

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Guard clauses
function processData(data) {
    if (!data) return null;
    if (!data.valid) return null;
    // Process data...
}

// Pattern 2: Default values
function greet(name) {
    if (!name) {
        name = "Guest";
    }
    return `Hello, ${name}`;
}

// Pattern 3: Range checking
function isInRange(value, min, max) {
    return value >= min && value <= max;
}

// Pattern 4: Type checking
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    } else {
        return "Unknown type";
    }
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an if statement that checks if a number is positive
// 2. Create an if-else that checks if a user is logged in
// 3. Create an if-else-if chain for grade assignment (A, B, C, D, F)
// 4. Use logical operators (&&, ||) in a condition
// 5. Create a function with early returns (guard clauses)
// 6. Check if a value is null or undefined using if statements
// 7. Create nested if statements and then flatten them
// 8. Write a function that validates user input using multiple if conditions
// 9. Use if-else to provide default values
// 10. Create a function that determines if a year is a leap year

