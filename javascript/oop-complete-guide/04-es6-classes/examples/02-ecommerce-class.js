/**
 * Example 2: E-commerce Class with Inheritance
 * - Product base class, getter, setter
 * - DigitalProduct extends Product, overrides applyDiscount
 */

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.id = this._generateId();
    this.createdAt = new Date();
    this.inStock = true;
  }

  _generateId() {
    return `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  set discountPercentage(percent) {
    if (percent >= 0 && percent <= 100) {
      this.price = this.price * (1 - percent / 100);
    }
  }

  applyDiscount(percent) {
    const oldPrice = this.price;
    this.discountPercentage = percent;
    console.log(`Price reduced from $${oldPrice.toFixed(2)} to ${this.formattedPrice}`);
  }

  static comparePrices(product1, product2) {
    return product1.price - product2.price;
  }
}

class DigitalProduct extends Product {
  constructor(name, price, fileSize, downloadLink) {
    super(name, price, 'Digital');
    this.fileSize = fileSize;
    this.downloadLink = downloadLink;
    this.downloadCount = 0;
  }

  applyDiscount(percent) {
    const maxDiscount = percent > 80 ? 80 : percent;
    super.applyDiscount(maxDiscount);
  }

  download() {
    this.downloadCount++;
    console.log(`Downloading ${this.name}...`);
    return this.downloadLink;
  }
}

const ebook = new DigitalProduct('JavaScript Guide', 29.99, '2.5MB', 'https://example.com/js-guide');
console.log(ebook.formattedPrice);
ebook.applyDiscount(90);
ebook.download();
