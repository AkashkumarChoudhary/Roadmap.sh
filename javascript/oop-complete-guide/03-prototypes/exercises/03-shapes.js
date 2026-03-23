/**
 * Practice Exercise 3: Shape and Circle, Rectangle
 *
 * - Shape: color, name, getInfo() on prototype → "I'm a [color] [name]"
 * - Circle extends Shape, adds radius, getArea() = πr²
 * - Rectangle extends Shape, adds width, height, getArea() = width × height
 * - Demonstrate polymorphism: both have getArea() but different implementations
 */

function Shape(color, name) {
  this.color = color;
  this.name = name;
}

Shape.prototype.getInfo = function () {
  return `I'm a ${this.color} ${this.name}`;
};

function Circle(color, radius) {
  Shape.call(this, color, 'Circle');
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

function Rectangle(color, width, height) {
  Shape.call(this, color, 'Rectangle');
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const circle = new Circle('red', 5);
const rect = new Rectangle('blue', 4, 6);

console.log(circle.getInfo()); // I'm a red Circle
console.log(rect.getInfo()); // I'm a blue Rectangle
console.log('Circle area:', circle.getArea().toFixed(2)); // 78.54
console.log('Rectangle area:', rect.getArea()); // 24

// Polymorphism: same interface, different behavior
[circle, rect].forEach((shape) => {
  console.log(`${shape.getInfo()} with area ${shape.getArea()}`);
});
