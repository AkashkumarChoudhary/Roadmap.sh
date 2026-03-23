/**
 * Practice Exercise 6: ShoppingCart, Product factory, Mixins
 *
 * - ShoppingCart with static calculateTax(total, taxRate)
 * - Product factory with private inventory tracking
 * - Mixins: Discountable, Reviewable for products
 * - PremiumProduct via composition (or class + mixins)
 */

// Static tax helper (standalone function for "ShoppingCart" concept)
function calculateTax(total, taxRate) {
  return total * taxRate;
}

// Product factory with private inventory
function createProduct(name, price, initialStock = 0) {
  let stock = initialStock;

  return {
    name,
    price,
    getId() {
      return `prod_${name.replace(/\s/g, '_')}_${Date.now()}`;
    },

    getStock() {
      return stock;
    },

    addStock(amount) {
      if (amount > 0) stock += amount;
    },

    removeStock(amount) {
      if (amount > 0 && amount <= stock) {
        stock -= amount;
        return true;
      }
      return false;
    },
  };
}

// Mixins
const DiscountableMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this._discountPercent = 0;
    }
    applyDiscount(percent) {
      if (percent >= 0 && percent <= 100) this._discountPercent = percent;
    }
    getDiscountedPrice() {
      return this.price * (1 - this._discountPercent / 100);
    }
  };

const ReviewableMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this._reviews = [];
    }
    addReview(rating, comment) {
      this._reviews.push({ rating, comment, date: new Date() });
    }
    getAverageRating() {
      if (this._reviews.length === 0) return 0;
      return (
        this._reviews.reduce((s, r) => s + r.rating, 0) / this._reviews.length
      ).toFixed(1);
    }
  };

// Simple class to apply mixins
class ProductClass {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function applyMixins(Base, ...mixins) {
  return mixins.reduce((C, m) => m(C), Base);
}

const PremiumProductClass = applyMixins(ProductClass, DiscountableMixin, ReviewableMixin);

const prod = new PremiumProductClass('Gaming Laptop', 999);
prod.applyDiscount(10);
prod.addReview(5, 'Great!');
prod.addReview(4, 'Good value');
console.log('Discounted price:', prod.getDiscountedPrice());
console.log('Average rating:', prod.getAverageRating());
console.log('Tax on 100 at 0.08:', calculateTax(100, 0.08));

const factoryProduct = createProduct('Book', 29.99, 50);
factoryProduct.addStock(10);
console.log('Stock:', factoryProduct.getStock());
factoryProduct.removeStock(5);
console.log('Stock after sale:', factoryProduct.getStock());
