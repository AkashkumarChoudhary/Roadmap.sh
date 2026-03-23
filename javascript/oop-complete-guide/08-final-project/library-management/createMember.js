/**
 * Factory: create member by type (regular / premium)
 */

const { Member } = require('./Member');

function createMember(type, name, age, memberId) {
  const tier = type === 'premium' ? Member.TIER_PREMIUM : Member.TIER_REGULAR;
  return new Member(name, age, memberId, tier);
}

module.exports = { createMember };
