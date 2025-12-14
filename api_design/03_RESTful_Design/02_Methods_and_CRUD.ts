export { };
/**
 * 02_Methods_and_CRUD.ts
 *
 * Mapping HTTP Methods to CRUD Operations:
 * Create -> POST
 * Read   -> GET
 * Update -> PUT (Full) / PATCH (Partial)
 * Delete -> DELETE
 */

interface Product {
    id: number;
    name: string;
    price: number;
}

class ProductController {
    private products: Product[] = [];

    // CREATE (POST /products)
    create(name: string, price: number): Product {
        const newProduct: Product = {
            id: this.products.length + 1,
            name,
            price,
        };
        this.products.push(newProduct);
        console.log(`[POST] Created product: ${name}`);
        return newProduct;
    }

    // READ ALL (GET /products)
    getAll(): Product[] {
        console.log(`[GET] Fetching all products`);
        return this.products;
    }

    // READ ONE (GET /products/:id)
    getOne(id: number): Product | undefined {
        console.log(`[GET] Fetching product ${id}`);
        return this.products.find((p) => p.id === id);
    }

    // UPDATE (PUT /products/:id) - Full Replacement
    update(id: number, newData: Omit<Product, "id">): Product | null {
        const index = this.products.findIndex((p) => p.id === id);
        if (index === -1) return null;

        this.products[index] = { id, ...newData };
        console.log(`[PUT] Updated product ${id}`);
        return this.products[index];
    }

    // DELETE (DELETE /products/:id)
    delete(id: number): boolean {
        const initialLength = this.products.length;
        this.products = this.products.filter((p) => p.id !== id);
        const deleted = this.products.length < initialLength;
        console.log(`[DELETE] Deleted product ${id}: ${deleted}`);
        return deleted;
    }
}

// --- Usage Example ---
const controller = new ProductController();

// 1. Create
controller.create("Laptop", 1000);
controller.create("Mouse", 20);

// 2. Read
console.log("All Products:", controller.getAll());

// 3. Update
controller.update(1, { name: "Gaming Laptop", price: 1500 });
console.log("Updated Product 1:", controller.getOne(1));

// 4. Delete
controller.delete(2);
console.log("All Products after delete:", controller.getAll());
