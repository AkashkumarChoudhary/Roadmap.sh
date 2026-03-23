/**
 * Mixins: Reservable, Renewable
 * - Reservable: reservation queue
 * - Renewable: allow one renewal
 */

function ReservableMixin(BaseClass) {
  return class extends BaseClass {
    constructor(...args) {
      super(...args);
      this._reservations = [];
    }

    addReservation(memberId) {
      if (!this._reservations.includes(memberId)) {
        this._reservations.push(memberId);
        return true;
      }
      return false;
    }

    removeReservation(memberId) {
      this._reservations = this._reservations.filter((id) => id !== memberId);
    }

    getNextReservation() {
      return this._reservations[0] || null;
    }

    get reservationCount() {
      return this._reservations.length;
    }
  };
}

function RenewableMixin(BaseClass) {
  return class extends BaseClass {
    constructor(...args) {
      super(...args);
      this._renewalCount = 0;
      this._maxRenewals = 1;
    }

    canRenew() {
      return this._renewalCount < this._maxRenewals;
    }

    renew(days = 14) {
      if (!this.canRenew()) return false;
      this._renewalCount++;
      return true;
    }

    get renewalCount() {
      return this._renewalCount;
    }
  };
}

module.exports = { ReservableMixin, RenewableMixin };
