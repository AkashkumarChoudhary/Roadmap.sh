export { };
/**
 * 01_HATEOAS.ts
 *
 * HATEOAS: Hypermedia As The Engine Of Application State.
 *
 * Idea: The client interacts with the network application entirely through
 * hypermedia provided dynamically by application servers.
 *
 * Basically: The API tells you what you can do next via links.
 */

interface Link {
    rel: string;  // Relationship (e.g., "self", "next", "edit")
    href: string; // The URL
    method: string; // The HTTP method to use
}

interface ResourceWithLinks {
    _links: Link[];
    [key: string]: any;
}

// Example: A Banking Account Resource
const accountData = {
    accountId: "12345",
    balance: 500.00,
    status: "active",
};

function enrichWithLinks(account: typeof accountData): ResourceWithLinks {
    const links: Link[] = [
        { rel: "self", href: `/accounts/${account.accountId}`, method: "GET" },
        { rel: "deposit", href: `/accounts/${account.accountId}/deposit`, method: "POST" },
        { rel: "withdraw", href: `/accounts/${account.accountId}/withdraw`, method: "POST" },
    ];

    // Conditional Links!
    if (account.balance < 0) {
        // If overdrawn, maybe we can't close the account?
        // Or maybe we add a link to "pay_overdraft"
    } else {
        links.push({ rel: "close", href: `/accounts/${account.accountId}`, method: "DELETE" });
    }

    return {
        ...account,
        _links: links,
    };
}

console.log("--- HATEOAS Response ---");
const response = enrichWithLinks(accountData);
console.log(JSON.stringify(response, null, 2));

/**
 * Why is this useful?
 * The client doesn't need to hardcode URLs like `/accounts/123/deposit`.
 * It just looks for the link with rel="deposit".
 * If the server changes the URL to `/accounts/123/transactions/deposit`,
 * the client keeps working automatically.
 */
