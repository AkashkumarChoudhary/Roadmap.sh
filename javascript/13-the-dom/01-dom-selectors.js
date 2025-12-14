/**
 * ============================================
 * DOM SELECTORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY DOM SELECTORS?
 * ------------------
 * DOM selectors allow you to find and interact with HTML elements:
 * - Access elements in the page
 * - Manipulate content and structure
 * - Essential for dynamic web pages
 * - Foundation of DOM manipulation
 * 
 * WHAT ARE DOM SELECTORS?
 * -----------------------
 * Methods to find elements in the DOM:
 * - getElementById() - Find by ID
 * - getElementsByClassName() - Find by class
 * - getElementsByTagName() - Find by tag
 * - querySelector() - CSS selector (single)
 * - querySelectorAll() - CSS selector (all)
 * 
 * KEY CONCEPTS:
 * ------------
 * - Single element vs NodeList
 * - CSS selectors
 * - Performance considerations
 * - Browser compatibility
 */

'use strict';

// ============================================
// GETELEMENTBYID()
// ============================================

// Find element by ID (returns single element)
// HTML: <div id="myDiv">Content</div>
// const element = document.getElementById('myDiv');
// console.log(element); // <div id="myDiv">Content</div>

// Returns null if not found
// const notFound = document.getElementById('nonExistent');
// console.log(notFound); // null

// ============================================
// GETELEMENTSBYCLASSNAME()
// ============================================

// Find elements by class (returns HTMLCollection)
// HTML: <div class="item">1</div><div class="item">2</div>
// const elements = document.getElementsByClassName('item');
// console.log(elements); // HTMLCollection(2) [div.item, div.item]
// console.log(elements.length); // 2
// console.log(elements[0]); // First element

// ============================================
// GETELEMENTSBYTAGNAME()
// ============================================

// Find elements by tag name (returns HTMLCollection)
// HTML: <p>Paragraph 1</p><p>Paragraph 2</p>
// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs); // HTMLCollection(2) [p, p]
// console.log(paragraphs.length); // 2

// ============================================
// QUERYSELECTOR()
// ============================================

// Find first element matching CSS selector (returns single element)
// HTML: <div class="container"><p class="text">Hello</p></div>
// const element = document.querySelector('.text');
// console.log(element); // <p class="text">Hello</p>

// Returns null if not found
// const notFound = document.querySelector('.nonExistent');
// console.log(notFound); // null

// CSS selector examples
// document.querySelector('#myId'); // ID selector
// document.querySelector('.myClass'); // Class selector
// document.querySelector('div'); // Tag selector
// document.querySelector('div.container'); // Combined
// document.querySelector('#parent .child'); // Descendant
// document.querySelector('input[type="text"]'); // Attribute

// ============================================
// QUERYSELECTORALL()
// ============================================

// Find all elements matching CSS selector (returns NodeList)
// HTML: <div class="item">1</div><div class="item">2</div>
// const elements = document.querySelectorAll('.item');
// console.log(elements); // NodeList(2) [div.item, div.item]
// console.log(elements.length); // 2

// NodeList is array-like but not array
// elements.forEach(element => {
//     console.log(element);
// });

// Convert to array
// const array = Array.from(elements);
// const array2 = [...elements];

// ============================================
// CSS SELECTOR EXAMPLES
// ============================================

// ID selector
// document.querySelector('#myId');

// Class selector
// document.querySelector('.myClass');

// Tag selector
// document.querySelector('div');

// Attribute selector
// document.querySelector('input[type="text"]');
// document.querySelector('a[href^="https"]'); // Starts with
// document.querySelector('img[alt]'); // Has attribute

// Descendant selector
// document.querySelector('#parent .child');

// Child selector
// document.querySelector('#parent > .child');

// Sibling selector
// document.querySelector('.item + .item'); // Adjacent
// document.querySelector('.item ~ .item'); // General

// Pseudo-classes
// document.querySelector('button:hover');
// document.querySelector('input:focus');
// document.querySelector('li:first-child');
// document.querySelector('li:last-child');
// document.querySelector('li:nth-child(2)');

// Multiple selectors
// document.querySelectorAll('div, p, span');

// ============================================
// SELECTING WITHIN ELEMENTS
// ============================================

// Select within specific element
// const container = document.querySelector('.container');
// const child = container.querySelector('.child');
// const children = container.querySelectorAll('.child');

// ============================================
// HTMLCOLLECTION VS NODELIST
// ============================================

// getElementsByClassName/TagName return HTMLCollection (live)
// const live = document.getElementsByClassName('item');
// console.log(live.length); // 2
// // Add new element with class 'item'
// // live.length automatically updates to 3

// querySelectorAll returns NodeList (static)
// const static = document.querySelectorAll('.item');
// console.log(static.length); // 2
// // Add new element with class 'item'
// // static.length stays 2 (not updated)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Form elements
// const form = document.querySelector('form');
// const input = document.querySelector('input[type="text"]');
// const button = document.querySelector('button[type="submit"]');

// Example 2: Navigation
// const navLinks = document.querySelectorAll('nav a');
// navLinks.forEach(link => {
//     console.log(link.href);
// });

// Example 3: Cards/Items
// const cards = document.querySelectorAll('.card');
// cards.forEach((card, index) => {
//     console.log(`Card ${index}:`, card);
// });

// Example 4: Specific structure
// const article = document.querySelector('article');
// const title = article.querySelector('h1');
// const content = article.querySelector('.content');

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. getElementById returns null if not found
// const element = document.getElementById('nonExistent');
// if (element) {
//     // Safe to use
// }

// 2. querySelector returns null if not found
// const element = document.querySelector('.nonExistent');
// if (element) {
//     // Safe to use
// }

// 3. HTMLCollection is live, NodeList is static
// const live = document.getElementsByClassName('item');
// // Changes to DOM affect live collection

// 4. querySelectorAll returns empty NodeList if none found
// const empty = document.querySelectorAll('.nonExistent');
// console.log(empty.length); // 0 (not null)

// 5. Selectors are case-sensitive
// document.querySelector('.MyClass'); // Different from .myclass

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use querySelector/querySelectorAll for flexibility
// ✅ Good: document.querySelector('.my-class')

// 2. Use getElementById for single ID lookup (fastest)
// ✅ Good: document.getElementById('myId')

// 3. Cache selectors if used multiple times
// ✅ Good: const element = document.querySelector('.item');

// 4. Check if element exists before using
// ✅ Good: if (element) { element.doSomething(); }

// 5. Use specific selectors for performance
// ✅ Good: document.querySelector('div.container')
// ⚠️ Less efficient: document.querySelector('.container')

// ============================================
// PERFORMANCE CONSIDERATIONS
// ============================================

// getElementById is fastest (uses hash lookup)
// const element = document.getElementById('myId');

// querySelector is slower but more flexible
// const element = document.querySelector('#myId');

// querySelectorAll creates NodeList (static)
// const elements = document.querySelectorAll('.item');

// getElementsByClassName creates HTMLCollection (live)
// const elements = document.getElementsByClassName('item');

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Single element
// const element = document.querySelector('.selector');

// Pattern 2: Multiple elements
// const elements = document.querySelectorAll('.selector');

// Pattern 3: Within element
// const container = document.querySelector('.container');
// const child = container.querySelector('.child');

// Pattern 4: Safe selection
// const element = document.querySelector('.selector');
// if (element) {
//     // Use element
// }

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use getElementById to find an element by ID
// 2. Use getElementsByClassName to find elements by class
// 3. Use querySelector to find the first matching element
// 4. Use querySelectorAll to find all matching elements
// 5. Use CSS selectors (ID, class, attribute, descendant)
// 6. Select elements within a specific container
// 7. Convert NodeList to array using Array.from()
// 8. Check if an element exists before using it
// 9. Use different selector methods and compare results
// 10. Explain the difference between HTMLCollection and NodeList

