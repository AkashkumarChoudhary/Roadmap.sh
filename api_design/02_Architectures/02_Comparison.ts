export { };
/**
 * 02_Comparison.ts
 *
 * When to use which architecture?
 * This file provides a guide based on common scenarios.
 */

interface ArchitectureScenario {
    scenario: string;
    recommended: "REST" | "GraphQL" | "gRPC" | "WebSockets";
    reason: string;
}

const scenarios: ArchitectureScenario[] = [
    {
        scenario: "Public API for third-party developers",
        recommended: "REST",
        reason: "Standard, easy to understand, caching support, tooling maturity.",
    },
    {
        scenario: "Mobile app with complex data requirements & poor network",
        recommended: "GraphQL",
        reason: "Avoids over-fetching, single round-trip, flexible queries.",
    },
    {
        scenario: "Microservices internal communication (Server-to-Server)",
        recommended: "gRPC",
        reason: "High performance (Protobuf), strongly typed, bidirectional streaming.",
    },
    {
        scenario: "Real-time chat application",
        recommended: "WebSockets",
        reason: "Full-duplex communication, low latency updates.",
    },
];

console.log("--- Architecture Decision Guide ---");
scenarios.forEach((s, index) => {
    console.log(`\nScenario ${index + 1}: ${s.scenario}`);
    console.log(`Recommendation: ${s.recommended}`);
    console.log(`Reason: ${s.reason}`);
});

/**
 * Summary:
 * - REST: The default choice for most web APIs.
 * - GraphQL: Best for flexible client data needs (frontend-heavy).
 * - gRPC: Best for performance-critical internal services.
 */
