export { };
/**
 * 01_Performance_Optimization.ts
 *
 * Making APIs fast and scalable.
 */

// -----------------------------------------------------------------------------
// 1. Caching
// -----------------------------------------------------------------------------
// Storing copies of data to avoid expensive computations or DB queries.

const cache = new Map<string, { data: any; expiry: number }>();

function getDataWithCache(key: string, ttlSeconds: number): string {
    const now = Date.now();
    const cached = cache.get(key);

    if (cached && cached.expiry > now) {
        console.log("[Cache] Hit!");
        return cached.data;
    }

    console.log("[Cache] Miss. Fetching from DB...");
    const data = "Expensive Data Result"; // Simulate DB call
    cache.set(key, { data, expiry: now + ttlSeconds * 1000 });
    return data;
}

console.log("--- Caching ---");
getDataWithCache("report_1", 5); // Miss
getDataWithCache("report_1", 5); // Hit


// -----------------------------------------------------------------------------
// 2. Rate Limiting (Throttling)
// -----------------------------------------------------------------------------
// We covered this in Advanced Topics, but here's a Token Bucket implementation concept.

class TokenBucket {
    private tokens: number;
    private lastRefill: number;

    constructor(private capacity: number, private refillRate: number) {
        this.tokens = capacity;
        this.lastRefill = Date.now();
    }

    allowRequest(): boolean {
        this.refill();
        if (this.tokens >= 1) {
            this.tokens -= 1;
            return true;
        }
        return false;
    }

    private refill() {
        const now = Date.now();
        const elapsed = (now - this.lastRefill) / 1000;
        const newTokens = elapsed * this.refillRate;
        this.tokens = Math.min(this.capacity, this.tokens + newTokens);
        this.lastRefill = now;
    }
}

console.log("\n--- Token Bucket Rate Limiter ---");
const limiter = new TokenBucket(2, 1); // Max 2 tokens, 1 refill per second
console.log(`Req 1: ${limiter.allowRequest()}`);
console.log(`Req 2: ${limiter.allowRequest()}`);
console.log(`Req 3: ${limiter.allowRequest()}`); // False (Empty)
