/**
 * Composition: build behavior by combining smaller parts
 * - canSwim, canFly, canWalk mixins
 * - Duck gets all three, Fish only canSwim
 * - Game characters: attack, defense, magic mixins
 */

const canSwim = {
  swim() {
    console.log(`${this.name} is swimming`);
  },
};

const canFly = {
  fly() {
    console.log(`${this.name} is flying`);
  },
};

const canWalk = {
  walk() {
    console.log(`${this.name} is walking`);
  },
};

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

class Duck {
  constructor(name) {
    this.name = name;
  }
}
mixin(Duck.prototype, canSwim, canFly, canWalk);

class Fish {
  constructor(name) {
    this.name = name;
  }
}
mixin(Fish.prototype, canSwim);

const donald = new Duck('Donald');
donald.swim();
donald.fly();
donald.walk();

const nemo = new Fish('Nemo');
nemo.swim();
// nemo.fly(); // Error

// Game character composition
const attackMixin = {
  attack(target) {
    console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
    target.health -= this.attackPower;
  },
};

const magicMixin = {
  castSpell(spell, target) {
    console.log(`${this.name} casts ${spell} on ${target.name}`);
    target.health -= this.magicPower;
  },
};

class Warrior {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.attackPower = 20;
  }
}
Object.assign(Warrior.prototype, attackMixin);

class Mage {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.magicPower = 25;
  }
}
Object.assign(Mage.prototype, magicMixin);

const warrior = new Warrior('Conan', 100);
const mage = new Mage('Gandalf', 80);
warrior.attack(mage);
console.log('Mage health:', mage.health);
