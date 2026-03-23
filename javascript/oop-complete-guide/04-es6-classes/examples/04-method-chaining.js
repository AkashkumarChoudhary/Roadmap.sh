/**
 * Example 4: Method Chaining
 * - Return this from methods to allow chaining
 */

class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator(10).add(5).multiply(2).subtract(3).getResult();
console.log(result); // 27
