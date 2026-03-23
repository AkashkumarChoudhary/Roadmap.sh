/**
 * Example 2: Real-World Product Constructor
 * - ID generation, dates
 * - Methods in constructor (not optimal — see Part 3 for prototype)
 */

function Product(name, price, category) {
  this.id = Date.now() + Math.random().toString(36).substr(2, 9);
  this.name = name;
  this.price = price;
  this.category = category;
  this.inStock = true;
  this.createdAt = new Date();

  this.getFormattedPrice = function () {
    return `$${this.price.toFixed(2)}`;
  };

  this.applyDiscount = function (percent) {
    if (percent > 0 && percent <= 50) {
      this.price = this.price * (1 - percent / 100);
      return `Discounted price: ${this.getFormattedPrice()}`;
    }
    return 'Invalid discount percentage';
  };
}

const laptop = new Product('Laptop', 999.99, 'Electronics');
const book = new Product('JavaScript Guide', 29.99, 'Books');

console.log(laptop.getFormattedPrice()); // $999.99
console.log(book.applyDiscount(10)); // Discounted price: $26.99

// Each instance has its own method (memory inefficient)
console.log(laptop.getFormattedPrice === book.getFormattedPrice); // false
