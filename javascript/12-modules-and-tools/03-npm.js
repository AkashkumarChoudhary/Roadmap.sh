/**
 * ============================================
 * NPM (NODE PACKAGE MANAGER)
 * ============================================
 * 
 * WHY NPM?
 * --------
 * NPM is essential for JavaScript development:
 * - Install and manage packages
 * - Share your code
 * - Manage dependencies
 * - Run scripts
 * - Largest package registry
 * 
 * WHAT IS NPM?
 * ------------
 * Package manager for JavaScript:
 * - Command-line tool
 * - Package registry (npmjs.com)
 * - Manages node_modules
 * - package.json file
 * 
 * KEY CONCEPTS:
 * ------------
 * - package.json - Project configuration
 * - node_modules - Installed packages
 * - npm install - Install packages
 * - npm scripts - Run commands
 * - Semantic versioning
 */

'use strict';

// ============================================
// PACKAGE.JSON
// ============================================

// package.json structure
/*
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^2.0.0"
  },
  "keywords": ["javascript", "node"],
  "author": "Your Name",
  "license": "MIT"
}
*/

// ============================================
// NPM INSTALL
// ============================================

// Install package
// npm install express

// Install as dev dependency
// npm install --save-dev jest

// Install specific version
// npm install express@4.18.0

// Install from package.json
// npm install

// Global install
// npm install -g nodemon

// ============================================
// DEPENDENCIES VS DEV DEPENDENCIES
// ============================================

// dependencies: Required for production
// {
//   "dependencies": {
//     "express": "^4.18.0"
//   }
// }

// devDependencies: Required for development only
// {
//   "devDependencies": {
//     "jest": "^29.0.0",
//     "eslint": "^8.0.0"
//   }
// }

// ============================================
// NPM SCRIPTS
// ============================================

// Define scripts in package.json
/*
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack",
    "lint": "eslint ."
  }
}
*/

// Run scripts
// npm start
// npm run dev
// npm test
// npm run build

// ============================================
// SEMANTIC VERSIONING
// ============================================

// Version format: MAJOR.MINOR.PATCH
// "express": "^4.18.0"
// ^ - Allows minor and patch updates (4.x.x)
// ~ - Allows only patch updates (4.18.x)
// * or "" - Allows any version (not recommended)
// Exact: "4.18.0" - Exact version only

// Examples:
// "^4.18.0" - Allows 4.18.0, 4.18.1, 4.19.0, but not 5.0.0
// "~4.18.0" - Allows 4.18.0, 4.18.1, but not 4.19.0
// "4.18.0" - Exact version only

// ============================================
// NPM COMMANDS
// ============================================

// Initialize project
// npm init
// npm init -y (skip questions)

// Install package
// npm install <package>
// npm i <package> (shortcut)

// Uninstall package
// npm uninstall <package>
// npm remove <package>

// Update package
// npm update <package>
// npm update (all packages)

// List installed packages
// npm list
// npm list --depth=0 (top level only)

// Check outdated packages
// npm outdated

// ============================================
// PACKAGE-LOCK.JSON
// ============================================

// package-lock.json:
// - Locks exact versions of all dependencies
// - Ensures consistent installs
// - Auto-generated
// - Should be committed to version control

// ============================================
// NODE_MODULES
// ============================================

// node_modules directory:
// - Contains installed packages
// - Can be large (many dependencies)
// - Should NOT be committed to version control
// - Recreated with npm install

// .gitignore should include:
// node_modules/
// package-lock.json (sometimes, but usually committed)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Basic package.json
/*
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
*/

// Example 2: Development setup
/*
{
  "scripts": {
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0"
  }
}
*/

// Example 3: Publishing package
/*
{
  "name": "@username/package-name",
  "version": "1.0.0",
  "main": "index.js",
  "keywords": ["keyword1", "keyword2"],
  "author": "Your Name",
  "license": "MIT"
}
*/

// Publish: npm publish

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Peer dependencies
// Packages that should be installed by consumer
// {
//   "peerDependencies": {
//     "react": "^18.0.0"
//   }
// }

// 2. Optional dependencies
// {
//   "optionalDependencies": {
//     "fsevents": "^2.0.0"
//   }
// }

// 3. Bundled dependencies
// {
//   "bundleDependencies": ["package-name"]
// }

// 4. npm ci vs npm install
// npm ci - Clean install (uses package-lock.json)
// npm install - May update package-lock.json

// 5. npm audit
// Check for security vulnerabilities
// npm audit
// npm audit fix

// ============================================
// BEST PRACTICES
// ============================================

// 1. Commit package-lock.json
// ✅ Good: Ensures consistent installs

// 2. Don't commit node_modules
// ✅ Good: Add to .gitignore

// 3. Use exact versions for critical packages
// ✅ Good: "express": "4.18.0" (if stability critical)

// 4. Regular updates
// ✅ Good: npm outdated, npm update

// 5. Use npm scripts for common tasks
// ✅ Good: "scripts": { "start": "node index.js" }

// 6. Separate dev and production dependencies
// ✅ Good: Use devDependencies for dev tools

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Basic setup
// npm init -y
// npm install express
// npm install --save-dev nodemon

// Pattern 2: Scripts
// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js"
// }

// Pattern 3: Version ranges
// "^4.18.0" - Caret (allows minor/patch)
// "~4.18.0" - Tilde (allows patch only)
// "4.18.0" - Exact

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a package.json file using npm init
// 2. Install a package using npm install
// 3. Install a dev dependency using --save-dev
// 4. Add scripts to package.json
// 5. Run a script using npm run
// 6. Explain the difference between dependencies and devDependencies
// 7. Understand semantic versioning (^, ~, exact)
// 8. Use npm list to see installed packages
// 9. Update a package using npm update
// 10. Explain what package-lock.json does

