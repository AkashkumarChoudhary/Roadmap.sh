/**
 * ============================================
 * MANIPULATING DOM ELEMENTS
 * ============================================
 * 
 * WHY MANIPULATE ELEMENTS?
 * ------------------------
 * DOM manipulation is core to dynamic web pages:
 * - Update content dynamically
 * - Change styles
 * - Modify structure
 * - Create interactive experiences
 * - Respond to user actions
 * 
 * WHAT IS DOM MANIPULATION?
 * -------------------------
 * Changing elements in the Document Object Model:
 * - innerHTML - HTML content
 * - textContent - Text content
 * - style - CSS styles
 * - classList - CSS classes
 * - attributes - Element attributes
 * 
 * KEY CONCEPTS:
 * ------------
 * - Content manipulation
 * - Style manipulation
 * - Class manipulation
 * - Attribute manipulation
 */

'use strict';

// ============================================
// INNERHTML - HTML CONTENT
// ============================================

// Get HTML content
// const element = document.querySelector('.container');
// console.log(element.innerHTML); // "<p>Content</p>"

// Set HTML content
// element.innerHTML = '<h1>New Content</h1>';
// element.innerHTML = '<p>Paragraph 1</p><p>Paragraph 2</p>';

// Append HTML
// element.innerHTML += '<p>Additional content</p>';

// ⚠️ Warning: innerHTML can be a security risk (XSS)
// Use textContent for user input

// ============================================
// TEXTCONTENT - TEXT CONTENT
// ============================================

// Get text content (strips HTML tags)
// const element = document.querySelector('.container');
// console.log(element.textContent); // "Content" (no HTML tags)

// Set text content (escapes HTML)
// element.textContent = '<script>alert("XSS")</script>';
// // Renders as text, not executed

// Append text
// element.textContent += ' Additional text';

// ============================================
// STYLE PROPERTY
// ============================================

// Access style object
// const element = document.querySelector('.item');
// element.style.color = 'red';
// element.style.backgroundColor = 'blue';
// element.style.fontSize = '20px';
// element.style.marginTop = '10px';

// CSS properties use camelCase in JavaScript
// margin-top → marginTop
// background-color → backgroundColor
// font-size → fontSize

// Get computed style
// const computed = window.getComputedStyle(element);
// console.log(computed.color);
// console.log(computed.backgroundColor);

// ============================================
// CLASSLIST - CSS CLASSES
// ============================================

// Add class
// const element = document.querySelector('.item');
// element.classList.add('active');
// element.classList.add('highlight', 'selected');

// Remove class
// element.classList.remove('active');
// element.classList.remove('highlight', 'selected');

// Toggle class
// element.classList.toggle('active'); // Add if missing, remove if present
// element.classList.toggle('active', true); // Force add
// element.classList.toggle('active', false); // Force remove

// Check if class exists
// if (element.classList.contains('active')) {
//     console.log('Element is active');
// }

// Replace class
// element.classList.replace('old', 'new');

// ============================================
// ATTRIBUTES
// ============================================

// Get attribute
// const element = document.querySelector('img');
// console.log(element.getAttribute('src'));
// console.log(element.getAttribute('alt'));

// Set attribute
// element.setAttribute('src', 'new-image.jpg');
// element.setAttribute('alt', 'New image');
// element.setAttribute('data-id', '123');

// Remove attribute
// element.removeAttribute('alt');

// Check attribute exists
// if (element.hasAttribute('src')) {
//     console.log('Has src attribute');
// }

// Direct property access (some attributes)
// element.id = 'newId';
// element.className = 'new-class';
// element.href = 'https://example.com'; // For <a> tags
// element.src = 'image.jpg'; // For <img> tags

// ============================================
// CREATING ELEMENTS
// ============================================

// Create element
// const div = document.createElement('div');
// div.textContent = 'New element';
// div.className = 'new-class';

// Append to DOM
// const container = document.querySelector('.container');
// container.appendChild(div);

// Insert before
// const newElement = document.createElement('p');
// newElement.textContent = 'Before';
// const existing = document.querySelector('.existing');
// container.insertBefore(newElement, existing);

// ============================================
// REMOVING ELEMENTS
// ============================================

// Remove element
// const element = document.querySelector('.to-remove');
// element.remove();

// Remove child
// const container = document.querySelector('.container');
// const child = container.querySelector('.child');
// container.removeChild(child);

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Update content
// function updateContent(elementId, newContent) {
//     const element = document.getElementById(elementId);
//     if (element) {
//         element.textContent = newContent;
//     }
// }

// Example 2: Toggle visibility
// function toggleVisibility(elementId) {
//     const element = document.getElementById(elementId);
//     if (element) {
//         element.classList.toggle('hidden');
//     }
// }

// Example 3: Change theme
// function setTheme(theme) {
//     document.body.className = theme;
//     // Or
//     document.body.classList.remove('light', 'dark');
//     document.body.classList.add(theme);
// }

// Example 4: Create and append
// function addListItem(text) {
//     const list = document.querySelector('ul');
//     const item = document.createElement('li');
//     item.textContent = text;
//     list.appendChild(item);
// }

// Example 5: Update image
// function changeImage(src, alt) {
//     const img = document.querySelector('img');
//     img.src = src;
//     img.alt = alt;
// }

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. innerHTML vs textContent
// innerHTML: Parses HTML, can execute scripts (XSS risk)
// textContent: Plain text, safe

// 2. style property only sets inline styles
// element.style.color = 'red'; // Inline style
// // Doesn't affect CSS classes

// 3. className vs classList
// element.className = 'new-class'; // Replaces all classes
// element.classList.add('new-class'); // Adds to existing

// 4. getAttribute vs property
// element.getAttribute('href'); // Returns string
// element.href; // Returns full URL (for <a> tags)

// 5. Removing non-existent element
// const element = document.querySelector('.non-existent');
// if (element) {
//     element.remove(); // Safe
// }

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use textContent for user-generated content
// ✅ Good: element.textContent = userInput;
// ❌ Bad: element.innerHTML = userInput; (XSS risk)

// 2. Use classList instead of className
// ✅ Good: element.classList.add('class');
// ⚠️ Acceptable: element.className = 'class';

// 3. Cache DOM queries
// ✅ Good: const element = document.querySelector('.item');
// ❌ Bad: document.querySelector('.item') multiple times

// 4. Check element exists before manipulation
// ✅ Good: if (element) { element.doSomething(); }

// 5. Use CSS classes for styling, not inline styles
// ✅ Good: element.classList.add('highlight');
// ⚠️ Acceptable: element.style.color = 'red'; (for dynamic)

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Update content
// element.textContent = newContent;

// Pattern 2: Toggle class
// element.classList.toggle('active');

// Pattern 3: Create and append
// const newEl = document.createElement('div');
// container.appendChild(newEl);

// Pattern 4: Update style
// element.style.property = value;

// Pattern 5: Update attribute
// element.setAttribute('attribute', 'value');

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use innerHTML to set HTML content of an element
// 2. Use textContent to set text content (safer)
// 3. Change element styles using the style property
// 4. Add/remove CSS classes using classList
// 5. Toggle a CSS class on an element
// 6. Get and set element attributes
// 7. Create a new element and append it to the DOM
// 8. Remove an element from the DOM
// 9. Update an image's src and alt attributes
// 10. Explain the difference between innerHTML and textContent

