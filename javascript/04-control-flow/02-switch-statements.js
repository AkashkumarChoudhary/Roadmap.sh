/**
 * ============================================
 * SWITCH STATEMENTS IN JAVASCRIPT
 * ============================================
 * 
 * WHY SWITCH STATEMENTS?
 * -----------------------
 * Switch statements provide a cleaner way to handle multiple conditions
 * based on a single value. They're more readable than long if-else-if chains
 * when comparing the same variable against multiple values.
 * 
 * WHAT IS A SWITCH STATEMENT?
 * ----------------------------
 * A control structure that evaluates an expression and executes code
 * based on matching case values:
 * - switch - Evaluates expression
 * - case - Matches specific values
 * - break - Exits switch (prevents fall-through)
 * - default - Executes if no case matches
 * 
 * KEY FEATURES:
 * ------------
 * - Uses strict equality (===) for matching
 * - Cases "fall through" without break
 * - default case is optional
 * - Can group cases together
 */

'use strict';

// ============================================
// BASIC SWITCH SYNTAX
// ============================================

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}

// ============================================
// SWITCH WITH BREAK (IMPORTANT!)
// ============================================

// Without break - fall-through behavior
let number = 1;
switch (number) {
    case 1:
        console.log("One");
        // Missing break - falls through!
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
}
// Output: "One" "Two" (both execute!)

// With break - correct behavior
let number2 = 1;
switch (number2) {
    case 1:
        console.log("One");
        break; // Exits switch
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
}
// Output: "One" (only this executes)

// ============================================
// DEFAULT CASE
// ============================================

let status = "unknown";
switch (status) {
    case "active":
        console.log("User is active");
        break;
    case "inactive":
        console.log("User is inactive");
        break;
    case "pending":
        console.log("User is pending");
        break;
    default:
        console.log("Unknown status");
        // No break needed for default (it's last)
}

// ============================================
// GROUPING CASES (INTENTIONAL FALL-THROUGH)
// ============================================

let month = 2;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

// ============================================
// SWITCH WITH NUMBERS
// ============================================

let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Score: ${score}, Grade: ${grade}`);

// Alternative: Using if-else might be clearer for ranges
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// ============================================
// SWITCH WITH EXPRESSIONS
// ============================================

let userRole = "admin";
let permissions;

switch (userRole) {
    case "admin":
        permissions = ["read", "write", "delete"];
        break;
    case "editor":
        permissions = ["read", "write"];
        break;
    case "viewer":
        permissions = ["read"];
        break;
    default:
        permissions = [];
}

console.log(permissions);

// ============================================
// SWITCH VS IF-ELSE
// ============================================

// Switch is better for:
// - Multiple exact value comparisons
// - Same variable compared multiple times
// - Clear, discrete cases

// If-else is better for:
// - Range comparisons
// - Complex conditions
// - Different variables

// Switch example (good use case):
let action = "create";
switch (action) {
    case "create":
        console.log("Creating...");
        break;
    case "read":
        console.log("Reading...");
        break;
    case "update":
        console.log("Updating...");
        break;
    case "delete":
        console.log("Deleting...");
        break;
}

// If-else example (better for this):
let age = 25;
if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: HTTP status codes
function getStatusMessage(code) {
    switch (code) {
        case 200:
            return "OK";
        case 201:
            return "Created";
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            return "Unknown Status";
    }
}

// Example 2: Calculator operations
function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) return "Division by zero";
            return a / b;
        default:
            return "Invalid operation";
    }
}

// Example 3: Day of week
function getDayType(day) {
    switch (day.toLowerCase()) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "Weekday";
        case "saturday":
        case "sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

// Example 4: User permissions
function checkPermission(role, action) {
    switch (role) {
        case "admin":
            return true; // Admin can do everything
        case "editor":
            switch (action) {
                case "read":
                case "write":
                    return true;
                default:
                    return false;
            }
        case "viewer":
            return action === "read";
        default:
            return false;
    }
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Switch uses strict equality (===)
let value = "5";
switch (value) {
    case 5: // Won't match! "5" !== 5
        console.log("Number 5");
        break;
    case "5": // This matches
        console.log("String 5");
        break;
}

// 2. Missing break causes fall-through
let x = 1;
switch (x) {
    case 1:
        console.log("One");
        // Missing break!
    case 2:
        console.log("Two");
        break;
}
// Output: "One" "Two"

// 3. Default doesn't need break (but it's fine to include)
switch (x) {
    case 1:
        console.log("One");
        break;
    default:
        console.log("Other");
        // No break needed, but you can add it
}

// 4. Cases must be constants (can't use variables)
let caseValue = 5;
switch (10) {
    // case caseValue: // SyntaxError! Must be constant
    case 5:
        console.log("Five");
        break;
}

// 5. Switch with expressions in cases
let num = 10;
switch (true) {
    case num > 5 && num < 15:
        console.log("Between 5 and 15");
        break;
    case num > 15:
        console.log("Greater than 15");
        break;
}

// 6. Empty cases
switch (x) {
    case 1:
    case 2:
    case 3:
        console.log("Small number");
        break;
    case 4:
        // Empty case - falls through to default
    default:
        console.log("Other");
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always use break (unless intentional fall-through)
// ✅ Good: case 1: doSomething(); break;

// 2. Comment intentional fall-through
// ✅ Good:
// case 1:
// case 2:
//     // Intentional fall-through
//     doSomething();
//     break;

// 3. Include default case (even if empty)
// ✅ Good: default: break;

// 4. Use switch for exact matches, if-else for ranges
// ✅ Switch: case "admin": ...
// ✅ If-else: if (age >= 18) ...

// 5. Keep cases simple
// ❌ Bad: Complex logic in cases
// ✅ Good: Call functions from cases

// 6. Consider readability
// Sometimes if-else is clearer than switch

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Return in cases (no break needed)
function getStatus(code) {
    switch (code) {
        case 200:
            return "OK";
        case 404:
            return "Not Found";
        default:
            return "Unknown";
    }
}

// Pattern 2: Grouped cases
function getSeason(month) {
    switch (month) {
        case 12: case 1: case 2:
            return "Winter";
        case 3: case 4: case 5:
            return "Spring";
        case 6: case 7: case 8:
            return "Summer";
        case 9: case 10: case 11:
            return "Fall";
        default:
            return "Invalid";
    }
}

// Pattern 3: Switch with functions
function handleAction(action) {
    switch (action) {
        case "create":
            return createItem();
        case "read":
            return readItem();
        case "update":
            return updateItem();
        case "delete":
            return deleteItem();
        default:
            throw new Error("Unknown action");
    }
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a switch statement for day of the week
// 2. Create a switch that groups multiple cases together (e.g., seasons)
// 3. Create a switch with a default case
// 4. Demonstrate what happens when you forget break (fall-through)
// 5. Create a switch for HTTP status codes
// 6. Create a calculator function using switch
// 7. Compare switch vs if-else for the same logic
// 8. Create a switch that uses return instead of break
// 9. Create a nested switch (switch inside a case)
// 10. Explain when to use switch vs if-else

