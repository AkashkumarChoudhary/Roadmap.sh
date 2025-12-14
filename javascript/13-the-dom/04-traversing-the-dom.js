/**
 * ============================================
 * TRAVERSING THE DOM
 * ============================================
 * 
 * WHY TRAVERSE THE DOM?
 * ---------------------
 * DOM traversal allows you to navigate between elements:
 * - Find related elements
 * - Navigate parent/child relationships
 * - Access siblings
 * - Essential for DOM manipulation
 * 
 * WHAT IS DOM TRAVERSING?
 * -----------------------
 * Moving between DOM nodes:
 * - parent - Parent element
 * - children - Child elements
 * - siblings - Sibling elements
 * - next/previous - Adjacent elements
 * 
 * KEY CONCEPTS:
 * ------------
 * - Parent-child relationships
 * - Sibling relationships
 * - Node types (element, text, etc.)
 * - Live vs static collections
 */

'use strict';

// ============================================
// PARENT ELEMENTS
// ============================================

// Get parent element
// const element = document.querySelector('.child');
// const parent = element.parentElement;
// const parentNode = element.parentNode;

// parentElement returns Element or null
// parentNode returns Node (can be text, comment, etc.)

// ============================================
// CHILD ELEMENTS
// ============================================

// Get children
// const container = document.querySelector('.container');
// const children = container.children; // HTMLCollection (only elements)
// const childNodes = container.childNodes; // NodeList (all nodes)

// children - Only element nodes
// childNodes - All nodes (elements, text, comments)

// First and last child
// const first = container.firstElementChild;
// const last = container.lastElementChild;
// const firstNode = container.firstChild; // Can be text node
// const lastNode = container.lastChild; // Can be text node

// ============================================
// SIBLING ELEMENTS
// ============================================

// Get siblings
// const element = document.querySelector('.item');
// const next = element.nextElementSibling;
// const previous = element.previousElementSibling;
// const nextNode = element.nextSibling; // Can be text node
// const previousNode = element.previousSibling; // Can be text node

// ============================================
// QUERYING WITHIN ELEMENTS
// ============================================

// Query within element
// const container = document.querySelector('.container');
// const child = container.querySelector('.child');
// const children = container.querySelectorAll('.child');

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Find parent
// function findParent(element, selector) {
//     let parent = element.parentElement;
//     while (parent) {
//         if (parent.matches(selector)) {
//             return parent;
//         }
//         parent = parent.parentElement;
//     }
//     return null;
// }

// Example 2: Get all siblings
// function getAllSiblings(element) {
//     const parent = element.parentElement;
//     return Array.from(parent.children).filter(child => child !== element);
// }

// Example 3: Find closest ancestor
// const element = document.querySelector('.child');
// const closest = element.closest('.ancestor'); // ES6 method

// Example 4: Check if element contains another
// const container = document.querySelector('.container');
// const child = document.querySelector('.child');
// if (container.contains(child)) {
//     console.log('Container contains child');
// }

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. parentElement vs parentNode
// parentElement: Element or null
// parentNode: Node (can be Document, etc.)

// 2. children vs childNodes
// children: Only element nodes
// childNodes: All nodes (text, comments, etc.)

// 3. nextSibling can be text node
// Use nextElementSibling for elements only

// 4. Empty elements
// firstElementChild can be null if no children

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use Element methods for elements
// ✅ Good: parentElement, children, nextElementSibling

// 2. Use closest() for ancestor search
// ✅ Good: element.closest('.ancestor')

// 3. Check for null before using
// ✅ Good: if (parent) { parent.doSomething(); }

// 4. Use querySelector within element
// ✅ Good: container.querySelector('.child')

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Get the parent element of a selected element
// 2. Get all children of an element
// 3. Get the first and last child elements
// 4. Get the next and previous sibling elements
// 5. Use closest() to find an ancestor element
// 6. Check if an element contains another element
// 7. Query for elements within a specific container
// 8. Explain the difference between children and childNodes
// 9. Explain the difference between nextSibling and nextElementSibling
// 10. Create a function that finds all ancestors of an element

