export { };
/**
 * 02_Reliability.ts
 *
 * Patterns to keep the API running when things go wrong.
 */

// -----------------------------------------------------------------------------
// 1. Retry Logic (Exponential Backoff)
// -----------------------------------------------------------------------------
// If a request fails (e.g., network blip), try again.

async function retry<T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> {
    try {
        return await fn();
    } catch (err) {
        if (retries === 0) throw err;
        console.log(`[Retry] Failed. Retrying in ${delay}ms...`);
        await new Promise((res) => setTimeout(res, delay));
        return retry(fn, retries - 1, delay * 2); // Exponential backoff
    }
}

// Mock unreliable function
let attempts = 0;
async function unreliableApi() {
    attempts++;
    if (attempts < 3) throw new Error("Network Error");
    return "Success!";
}

console.log("--- Retry Logic ---");
retry(unreliableApi, 3, 100).then(console.log).catch(console.error);


// -----------------------------------------------------------------------------
// 2. Circuit Breaker
// -----------------------------------------------------------------------------
// If a service is down, stop calling it to let it recover.

enum CircuitState {
    CLOSED, // Normal operation
    OPEN,   // Failing, stop requests
    HALF_OPEN, // Testing if it's back
}

class CircuitBreaker {
    private state = CircuitState.CLOSED;
    private failures = 0;
    private threshold = 3;

    call() {
        if (this.state === CircuitState.OPEN) {
            console.log("[Circuit] OPEN. Request blocked.");
            return;
        }

        try {
            // Simulate call...
            console.log("[Circuit] Request allowed.");
            // If error: this.failures++; if (failures > threshold) this.state = OPEN;
        } catch (e) {
            this.failures++;
            if (this.failures >= this.threshold) {
                this.state = CircuitState.OPEN;
                // Set timeout to switch to HALF_OPEN later
            }
        }
    }
}

console.log("\n--- Circuit Breaker ---");
const breaker = new CircuitBreaker();
breaker.call();
