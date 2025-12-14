export { };
/**
 * 02_Best_Practices.ts
 *
 * Good documentation is as important as the code itself.
 * If people can't figure out how to use your API, it doesn't exist.
 */

const documentationChecklist = [
    "✅ Authentication: Clearly explain how to authenticate (Header? Key?).",
    "✅ Error Codes: List all possible error codes and what they mean.",
    "✅ Examples: Provide Request and Response examples for every endpoint.",
    "✅ Try It Out: If possible, provide an interactive console (Swagger UI).",
    "✅ Changelog: Document changes between versions.",
    "✅ Rate Limits: Tell users what the limits are.",
    "✅ Contact: How to get support.",
];

console.log("--- API Documentation Checklist ---");
documentationChecklist.forEach((item) => console.log(item));

/**
 * Tools to help:
 * - Swagger UI / Redoc (for OpenAPI)
 * - Postman Collections
 * - ReadMe.io
 */
