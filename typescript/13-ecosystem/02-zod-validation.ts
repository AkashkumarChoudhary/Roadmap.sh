export { };

/**
 * MODULE 13: ECOSYSTEM
 * Topic: Runtime Validation (Zod)
 * 
 * THEORY:
 * TypeScript types disappear at runtime.
 * If you receive data from an API, TS can't check if it matches your interface.
 * 
 * Libraries like `Zod` allow you to define a schema that:
 * 1. Validates data at runtime.
 * 2. Infers the TypeScript type automatically.
 */

// --- CODE: Zod (Mocked) ---

// Imagine we imported z from "zod"
// import { z } from "zod";

// 1. Define Schema
// const UserSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     email: z.string().email()
// });

// 2. Infer Type
// type User = z.infer<typeof UserSchema>;
// Equivalent to: { id: number; name: string; email: string; }

// 3. Validate
// const data = JSON.parse(apiResponse);
// const user = UserSchema.parse(data); // Throws error if invalid!

console.log("Install 'zod' to run this code.");

// --- TASK ---
// TODO: Run `npm install zod`.
// Uncomment the code above and try to validate an object.
