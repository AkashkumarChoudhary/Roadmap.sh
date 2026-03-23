/**
 * Mixins: add functionality without inheritance
 * - LoggerMixin, SerializableMixin, TimestampMixin
 * - applyMixins utility
 */

const LoggerMixin = (BaseClass) =>
  class extends BaseClass {
    log(message) {
      console.log(`[${this.constructor.name}] ${message}`);
    }

    error(message) {
      console.error(`[${this.constructor.name}] ERROR: ${message}`);
    }
  };

const SerializableMixin = (BaseClass) =>
  class extends BaseClass {
    serialize() {
      return JSON.stringify(this);
    }

    static deserialize(json) {
      const data = JSON.parse(json);
      return new this(data);
    }
  };

const TimestampMixin = (BaseClass) =>
  class extends BaseClass {
    constructor(...args) {
      super(...args);
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }

    update() {
      this.updatedAt = new Date();
    }
  };

function applyMixins(BaseClass, ...mixins) {
  return mixins.reduce((Class, mixin) => mixin(Class), BaseClass);
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const BetterUser = applyMixins(User, TimestampMixin, LoggerMixin, SerializableMixin);

const user = new BetterUser('John', 'john@example.com');
user.log('User created');
console.log(user.serialize());
user.update();
console.log(user.updatedAt);
