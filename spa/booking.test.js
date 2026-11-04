const assert = require('node:assert/strict');
const booking = require('./booking.js');
const monday = new Date('2026-11-02T03:15:00Z'); // Monday 10:15 Bangkok
assert.equal(booking.normalizePhone('๐๘๑-๒๓๔-๕๖๗๘'), '0812345678');
assert.equal(booking.normalizePhone('---------'), null);
assert.equal(booking.normalizePhone('081x2345678'), null);
assert.equal(booking.validDate('2026-11-01', monday), false);
assert.equal(booking.validDate('2026-11-02', monday), true);
assert.equal(booking.validDate('2027-03-01', monday), false);
assert.equal(booking.validDate('2026-02-30', monday), false);
let slots = booking.availableSlots('2026-11-02', 120, monday);
assert.equal(slots[0], '10:30');
assert.equal(slots.at(-1), '18:00');
slots = booking.availableSlots('2026-11-07', 45, monday);
assert.equal(slots[0], '09:00');
assert.equal(slots.at(-1), '20:00');
assert.equal(booking.availableSlots('2026-11-01', 60, monday).length, 0);
console.log('Booking validation and slot boundaries passed');
