export { };
/**
 * 03_Content_Negotiation.ts
 *
 * The client tells the server what format it wants via the 'Accept' header.
 * The server responds with 'Content-Type'.
 */

interface Request {
    headers: {
        Accept: string;
    };
}

const data = { id: 1, name: "Alice" };

function handleRequest(req: Request) {
    const accept = req.headers.Accept;

    if (accept.includes("application/json")) {
        return {
            contentType: "application/json",
            body: JSON.stringify(data),
        };
    }

    if (accept.includes("application/xml")) {
        return {
            contentType: "application/xml",
            body: `<User><Id>${data.id}</Id><Name>${data.name}</Name></User>`,
        };
    }

    if (accept.includes("text/csv")) {
        return {
            contentType: "text/csv",
            body: `id,name\n${data.id},${data.name}`,
        };
    }

    // Default or 406 Not Acceptable
    return {
        contentType: "application/json",
        body: JSON.stringify(data),
    };
}

console.log("--- Content Negotiation ---");

console.log("Client wants JSON:");
console.log(handleRequest({ headers: { Accept: "application/json" } }));

console.log("\nClient wants XML:");
console.log(handleRequest({ headers: { Accept: "application/xml" } }));

console.log("\nClient wants CSV:");
console.log(handleRequest({ headers: { Accept: "text/csv" } }));
