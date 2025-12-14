/**
 * ============================================
 * USER INTERACTION IN JAVASCRIPT
 * ============================================
 * 
 * WHY USER INTERACTION?
 * ---------------------
 * Interactive programs need to communicate with users. JavaScript provides
 * methods to display messages, get input, and confirm actions. These are
 * essential for building user-friendly applications.
 * 
 * WHAT ARE INTERACTION METHODS?
 * -----------------------------
 * JavaScript has three main browser-specific methods for user interaction:
 * 1. alert() - Display a message
 * 2. prompt() - Get user input
 * 3. confirm() - Get yes/no confirmation
 * 
 * IMPORTANT NOTES:
 * ----------------
 * - These methods are BROWSER-SPECIFIC (not available in Node.js)
 * - They are SYNCHRONOUS and BLOCKING (execution stops until user responds)
 * - They have limited styling options (browser default appearance)
 * - Modern web apps prefer custom modals/dialogs for better UX
 * - In Node.js, use readline or other modules for user input
 */

'use strict';

// ============================================
// 1. ALERT - DISPLAY MESSAGE
// ============================================

/**
 * alert(message)
 * - Displays a modal dialog with a message and OK button
 * - Blocks execution until user clicks OK
 * - Returns undefined
 */

// Basic alert
// alert("Welcome to JavaScript!");

// Alert with variable
let userName = "Alice";
// alert("Hello, " + userName + "!");

// Alert with template literal (ES6)
// alert(`Hello, ${userName}!`);

// Alert with multiple lines (using \n)
// alert("Line 1\nLine 2\nLine 3");

// ============================================
// 2. PROMPT - GET USER INPUT
// ============================================

/**
 * prompt(message, defaultText)
 * - Displays a modal dialog with input field
 * - Returns the entered string or null if cancelled
 * - defaultText is optional (pre-fills the input)
 */

// Basic prompt
// let userInput = prompt("What is your name?");
// console.log("User entered:", userInput);

// Prompt with default value
// let age = prompt("Enter your age:", "18");
// console.log("Age:", age);

// Handling prompt cancellation
// let response = prompt("Do you like JavaScript?");
// if (response === null) {
//     console.log("User cancelled");
// } else if (response === "") {
//     console.log("User entered nothing");
// } else {
//     console.log("User entered:", response);
// }

// Important: prompt always returns a STRING
// let numberInput = prompt("Enter a number:");
// console.log(typeof numberInput); // "string"
// console.log(numberInput + 5); // "105" (string concatenation, not addition!)
// To convert to number:
// let num = Number(prompt("Enter a number:"));
// or
// let num = parseInt(prompt("Enter a number:"), 10);

// ============================================
// 3. CONFIRM - YES/NO CONFIRMATION
// ============================================

/**
 * confirm(message)
 * - Displays a modal dialog with OK and Cancel buttons
 * - Returns true if OK clicked, false if Cancel clicked
 * - Useful for confirmation dialogs
 */

// Basic confirm
// let result = confirm("Do you want to continue?");
// console.log("User choice:", result); // true or false

// Using confirm in conditional
// if (confirm("Are you sure you want to delete this?")) {
//     console.log("Item deleted");
// } else {
//     console.log("Deletion cancelled");
// }

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Simple greeting app
function greetingApp() {
    // let name = prompt("What's your name?", "Guest");
    // if (name) {
    //     alert(`Hello, ${name}! Welcome!`);
    // }
}
// greetingApp();

// Example 2: Age verification
function ageVerification() {
    // let age = prompt("How old are you?", "18");
    // if (age === null) {
    //     alert("Age verification cancelled");
    //     return;
    // }
    // 
    // let ageNum = Number(age);
    // if (isNaN(ageNum) || ageNum < 0) {
    //     alert("Please enter a valid age");
    // } else if (ageNum >= 18) {
    //     alert("You are an adult");
    // } else {
    //     alert("You are a minor");
    // }
}
// ageVerification();

// Example 3: Confirmation before action
function deleteItem() {
    // let confirmed = confirm("Are you sure you want to delete this item?");
    // if (confirmed) {
    //     alert("Item deleted successfully");
    //     // Perform deletion logic here
    // } else {
    //     alert("Deletion cancelled");
    // }
}
// deleteItem();

// Example 4: Multi-step interaction
function multiStepForm() {
    // let name = prompt("Enter your name:");
    // if (!name) {
    //     alert("Name is required");
    //     return;
    // }
    // 
    // let email = prompt("Enter your email:");
    // if (!email) {
    //     alert("Email is required");
    //     return;
    // }
    // 
    // let confirmed = confirm(`Confirm your details:\nName: ${name}\nEmail: ${email}`);
    // if (confirmed) {
    //     alert("Registration successful!");
    // } else {
    //     alert("Registration cancelled");
    // }
}
// multiStepForm();

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. prompt() always returns a string (even for numbers)
// let num = prompt("Enter a number:");
// console.log(typeof num); // "string"
// console.log(num + 10); // "510" (if user entered "5")
// Solution: Convert explicitly
// let num = Number(prompt("Enter a number:"));
// or
// let num = parseInt(prompt("Enter a number:"), 10);

// 2. prompt() returns null if cancelled
// let input = prompt("Enter something:");
// if (input === null) {
//     console.log("Cancelled");
// } else {
//     console.log("Entered:", input);
// }

// 3. Empty string vs null
// let input = prompt("Enter your name:");
// if (input === null) {
//     // User clicked Cancel
// } else if (input === "") {
//     // User clicked OK but entered nothing
// } else {
//     // User entered something
// }

// 4. confirm() returns boolean
// let result = confirm("Continue?");
// console.log(typeof result); // "boolean"
// console.log(result); // true or false

// 5. Blocking nature - code after alert/prompt/confirm waits
// console.log("Before alert");
// alert("This blocks execution");
// console.log("After alert"); // Only runs after OK is clicked

// 6. Browser differences
// Different browsers may style these dialogs differently
// Some browsers allow users to disable alerts/prompts

// ============================================
// NODE.JS ALTERNATIVES
// ============================================

// In Node.js, these methods don't exist. Use alternatives:

// Using readline module (Node.js)
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});
*/

// Using console for output (works everywhere)
console.log("This works in both browser and Node.js");
console.error("Error message");
console.warn("Warning message");

// ============================================
// MODERN ALTERNATIVES (BROWSER)
// ============================================

// Modern web apps use custom modals instead of alert/prompt/confirm
// Libraries like SweetAlert2, or custom HTML/CSS modals provide:
// - Better styling
// - More customization
// - Non-blocking (async) behavior
// - Better UX

// Example custom modal (conceptual):
/*
function customAlert(message) {
    // Create modal element
    // Style it
    // Show it
    // Return promise that resolves when closed
}
*/

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use sparingly - they interrupt user flow
// ❌ Bad: alert("Data saved!"); // Annoying popup
// ✅ Good: Show inline message or toast notification

// 2. Always handle null from prompt
// let input = prompt("Enter value:");
// if (input === null) {
//     // Handle cancellation
//     return;
// }

// 3. Convert prompt input to correct type
// let age = Number(prompt("Enter age:"));
// if (isNaN(age)) {
//     alert("Invalid number");
// }

// 4. Provide default values in prompt when appropriate
// let name = prompt("Enter name:", "Guest");

// 5. Use confirm for destructive actions
// if (confirm("Delete this item?")) {
//     // Delete logic
// }

// 6. In production, prefer custom UI components
// Modern frameworks (React, Vue, etc.) have better solutions

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a function that asks for user's name using prompt()
// 2. If name is provided, show an alert greeting them
// 3. If prompt is cancelled (null), show a different message
// 4. Create a function that asks for age and validates it's a number
// 5. Create a function that uses confirm() to ask before performing an action
// 6. Create a multi-step form that collects: name, email, and age
// 7. Show a summary using confirm() before final submission
// 8. Handle all edge cases: empty strings, null, invalid numbers
// 
// Note: Uncomment the alert/prompt/confirm calls to test in browser
// These won't work in Node.js - use console.log for testing logic

