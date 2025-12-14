export { };
/**
 * 04_Data_Formats.ts
 *
 * APIs need a standard format to exchange data.
 * JSON is the dominant standard for modern web APIs.
 */

// -----------------------------------------------------------------------------
// 1. JSON (JavaScript Object Notation)
// -----------------------------------------------------------------------------
// - Lightweight
// - Easy to read/write
// - Native to JavaScript/TypeScript

interface UserJson {
    id: number;
    name: string;
    isActive: boolean;
    roles: string[];
}

const userJson: UserJson = {
    id: 1,
    name: "Alice",
    isActive: true,
    roles: ["admin", "editor"],
};

console.log("--- JSON Format ---");
console.log(JSON.stringify(userJson, null, 2));


// -----------------------------------------------------------------------------
// 2. XML (Extensible Markup Language)
// -----------------------------------------------------------------------------
// - Verbose
// - Strict structure
// - Supports metadata (attributes)
// - Common in enterprise/legacy systems (SOAP)

const userXml = `
<User id="1">
  <Name>Alice</Name>
  <IsActive>true</IsActive>
  <Roles>
    <Role>admin</Role>
    <Role>editor</Role>
  </Roles>
</User>
`;

console.log("\n--- XML Format ---");
console.log(userXml.trim());
