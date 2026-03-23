/**
 * Pillar 4: Polymorphism
 * - Shape base with calculateArea() to be overridden
 * - Circle, Rectangle, Triangle each implement getArea differently
 * - PaymentMethod: CreditCard, PayPal, Crypto — same processPayment() interface
 */

class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error('Method must be implemented by subclass');
  }

  describe() {
    return `I am a ${this.name} with area ${this.calculateArea()}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super('Triangle');
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];
shapes.forEach((shape) => console.log(shape.describe()));

// Payment polymorphism
class PaymentMethod {
  processPayment(amount) {
    throw new Error('processPayment must be implemented');
  }
}

class CreditCardPayment extends PaymentMethod {
  constructor(cardNumber, expiry) {
    super();
    this.cardNumber = cardNumber;
    this.expiry = expiry;
  }

  processPayment(amount) {
    console.log(`Processing $${amount} via Credit Card`);
    return `CC_${Date.now()}`;
  }
}

class PayPalPayment extends PaymentMethod {
  constructor(email) {
    super();
    this.email = email;
  }

  processPayment(amount) {
    console.log(`Processing $${amount} via PayPal (${this.email})`);
    return `PP_${Date.now()}`;
  }
}

class Checkout {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  completePurchase(amount) {
    const transactionId = this.paymentMethod.processPayment(amount);
    console.log(`Purchase complete! Transaction ID: ${transactionId}`);
    return transactionId;
  }
}

[new Checkout(new CreditCardPayment('4111', '12/25')), new Checkout(new PayPalPayment('user@example.com'))].forEach(
  (c) => c.completePurchase(99.99)
);
