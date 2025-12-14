export { };

/**
 * MODULE 1: INTRODUCTION & SETUP
 * Topic: Installation & Configuration (tsconfig.json)
 * 
 * THEORY:
 * The `tsconfig.json` file controls how TypeScript compiles your code.
 * 
 * Key Options:
 * - `target`: The JS version to output (e.g., "ES5", "ES2020").
 * - `module`: The module system to use (e.g., "CommonJS", "ESNext").
 * - `strict`: Enables a suite of strict type-checking options (Recommended: true).
 * - `outDir`: Where to put the compiled JS files.
 * - `rootDir`: Where the source TS files are located.
 */

// This file is just for demonstration of concepts, as configuration happens in tsconfig.json.

console.log("Check the root tsconfig.json file for the actual configuration used in this project.");

// Example of how strict mode helps:

function logMessage(message: string | null) {
    // With "strictNullChecks": true (part of "strict": true),
    // TS forces us to handle the null case.

    if (message) {
        console.log(message.toUpperCase());
    } else {
        console.log("No message provided");
    }
}

logMessage("Hello Config");
logMessage(null);

// --- BAD CODE (Uncomment to see errors) ---

// function badLog(msg: string | null) {
//     console.log(msg.toUpperCase()); 
// }
// Error: 'msg' is possibly 'null'. (Only happens if strictNullChecks is on)

// --- TASK ---
// TODO: Open `tsconfig.json` in the root. Change "target" to "ES5".
// Run `npx tsc` and check the `dist` folder to see how the output JS changes (e.g., var instead of let/const).
