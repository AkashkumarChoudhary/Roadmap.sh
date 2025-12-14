/**
 * ============================================
 * EVENT LISTENERS IN JAVASCRIPT
 * ============================================
 * 
 * WHY EVENT LISTENERS?
 * --------------------
 * Event listeners enable interactivity:
 * - Respond to user actions
 * - Handle clicks, inputs, keyboard
 * - Create dynamic user experiences
 * - Essential for web applications
 * 
 * WHAT ARE EVENT LISTENERS?
 * --------------------------
 * Functions that respond to events:
 * - addEventListener() - Attach listener
 * - removeEventListener() - Remove listener
 * - Event object - Information about event
 * - Event types - click, submit, keydown, etc.
 * 
 * KEY CONCEPTS:
 * ------------
 * - Event bubbling
 * - Event capturing
 * - Event delegation
 * - preventDefault()
 * - stopPropagation()
 */

'use strict';

// ============================================
// ADDEVENTLISTENER()
// ============================================

// Basic event listener
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log('Button clicked!');
// });

// Arrow function
// button.addEventListener('click', () => {
//     console.log('Button clicked!');
// });

// Named function
// function handleClick() {
//     console.log('Button clicked!');
// }
// button.addEventListener('click', handleClick);

// ============================================
// EVENT TYPES
// ============================================

// Mouse events
// element.addEventListener('click', handler);
// element.addEventListener('dblclick', handler);
// element.addEventListener('mousedown', handler);
// element.addEventListener('mouseup', handler);
// element.addEventListener('mouseenter', handler);
// element.addEventListener('mouseleave', handler);
// element.addEventListener('mousemove', handler);

// Keyboard events
// element.addEventListener('keydown', handler);
// element.addEventListener('keyup', handler);
// element.addEventListener('keypress', handler);

// Form events
// form.addEventListener('submit', handler);
// input.addEventListener('input', handler);
// input.addEventListener('change', handler);
// input.addEventListener('focus', handler);
// input.addEventListener('blur', handler);

// Window events
// window.addEventListener('load', handler);
// window.addEventListener('resize', handler);
// window.addEventListener('scroll', handler);

// ============================================
// EVENT OBJECT
// ============================================

// Event object contains information about event
// button.addEventListener('click', function(event) {
//     console.log(event.type); // "click"
//     console.log(event.target); // Element that triggered event
//     console.log(event.currentTarget); // Element with listener
//     console.log(event.clientX, event.clientY); // Mouse coordinates
// });

// Keyboard event
// input.addEventListener('keydown', function(event) {
//     console.log(event.key); // Key pressed
//     console.log(event.code); // Physical key code
//     console.log(event.ctrlKey); // Ctrl key pressed
//     console.log(event.shiftKey); // Shift key pressed
// });

// ============================================
// PREVENTDEFAULT()
// ============================================

// Prevent default behavior
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
//     // Handle form manually
// });

// link.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent navigation
//     // Handle click manually
// });

// ============================================
// STOPPROPAGATION()
// ============================================

// Stop event from bubbling up
// button.addEventListener('click', function(event) {
//     event.stopPropagation(); // Stop bubbling
//     console.log('Button clicked');
// });

// parent.addEventListener('click', function() {
//     console.log('Parent clicked'); // Won't fire if stopPropagation called
// });

// ============================================
// EVENT BUBBLING
// ============================================

// Events bubble up from child to parent
// HTML: <div class="parent"><button class="child">Click</button></div>

// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// child.addEventListener('click', function() {
//     console.log('Child clicked');
// });

// parent.addEventListener('click', function() {
//     console.log('Parent clicked'); // Also fires when child clicked
// });

// Clicking button triggers both listeners (bubbling)

// ============================================
// EVENT CAPTURING
// ============================================

// Events can be captured on the way down
// addEventListener(type, handler, useCapture)

// parent.addEventListener('click', function() {
//     console.log('Parent (capturing)');
// }, true); // true = capturing phase

// child.addEventListener('click', function() {
//     console.log('Child');
// });

// Order: Parent (capturing) → Child → Parent (bubbling)

// ============================================
// EVENT DELEGATION
// ============================================

// Attach listener to parent, handle events from children
// const list = document.querySelector('ul');

// list.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         console.log('List item clicked:', event.target.textContent);
//     }
// });

// Works for dynamically added items too!

// ============================================
// REMOVEEVENTLISTENER()
// ============================================

// Remove event listener (must be same function reference)
// function handleClick() {
//     console.log('Clicked');
// }

// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick); // Removed

// Anonymous functions cannot be removed
// button.addEventListener('click', function() {
//     console.log('Clicked');
// });
// // Cannot remove - different function reference

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Button click
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });

// Example 2: Form submission
// const form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     console.log('Form data:', Object.fromEntries(formData));
// });

// Example 3: Input validation
// const input = document.querySelector('input[type="email"]');
// input.addEventListener('blur', function() {
//     const email = this.value;
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         this.style.borderColor = 'red';
//     } else {
//         this.style.borderColor = 'green';
//     }
// });

// Example 4: Keyboard shortcuts
// document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey && event.key === 's') {
//         event.preventDefault();
//         console.log('Save shortcut');
//     }
// });

// Example 5: Dynamic content
// function addItem(text) {
//     const list = document.querySelector('ul');
//     const item = document.createElement('li');
//     item.textContent = text;
//     item.addEventListener('click', function() {
//         this.remove();
//     });
//     list.appendChild(item);
// }

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Multiple listeners on same element
// button.addEventListener('click', handler1);
// button.addEventListener('click', handler2);
// // Both fire when clicked

// 2. Event object is reused
// Don't store event object, use it immediately

// 3. this in event handler
// button.addEventListener('click', function() {
//     console.log(this); // button element
// });

// button.addEventListener('click', () => {
//     console.log(this); // Not button (arrow function)
// });

// 4. Event delegation with dynamic content
// Use event.target to handle dynamically added elements

// 5. Memory leaks
// Remove listeners when element is removed
// element.removeEventListener('click', handler);

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use addEventListener (not onclick attribute)
// ✅ Good: element.addEventListener('click', handler);
// ❌ Bad: <button onclick="handler()">

// 2. Remove listeners when done
// ✅ Good: element.removeEventListener('click', handler);

// 3. Use event delegation for dynamic content
// ✅ Good: parent.addEventListener('click', handler);

// 4. Prevent default only when needed
// ✅ Good: event.preventDefault() for custom behavior

// 5. Use named functions for removal
// ✅ Good: function handler() {}; add/remove with same reference

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Click handler
// element.addEventListener('click', handler);

// Pattern 2: Form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Handle form
// });

// Pattern 3: Event delegation
// parent.addEventListener('click', (e) => {
//     if (e.target.matches('.child')) {
//         // Handle
//     }
// });

// Pattern 4: Keyboard shortcut
// document.addEventListener('keydown', (e) => {
//     if (e.ctrlKey && e.key === 's') {
//         e.preventDefault();
//         // Handle
//     }
// });

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Add a click event listener to a button
// 2. Access the event object in an event handler
// 3. Use preventDefault() to prevent default behavior
// 4. Use stopPropagation() to stop event bubbling
// 5. Demonstrate event bubbling with nested elements
// 6. Use event delegation to handle clicks on dynamic elements
// 7. Remove an event listener
// 8. Handle form submission with preventDefault()
// 9. Create a keyboard shortcut handler
// 10. Explain the difference between event.target and event.currentTarget

