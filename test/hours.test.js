'use strict';
const expect = require('chai').expect;
const { hours } = require('../lib/index.js');

const now = new Date(2022, 3, 25, 12); // 2022.4.25

describe('hours function test', () => {
  it('should return an array of 10 hours', () => {
    const length = 10;
    const result = hours(now, length, true);
    expect(result.length).to.equal(length);
  });

  it('should be sorted in descending order at 1-hour intervals', () => {
    const result = hours(now, 10, true);
    expect(result[1].getHours()).to.lt(result[0].getHours());
    expect(result[1].getHours() - result[0].getHours()).to.equal(-1);
  });

  it('should return an array of hours with zero minutes', () => {
    const result = hours(now, 10, true);
    expect(result[0].getMinutes()).to.equal(0);
    expect(result[0].getSeconds()).to.equal(0);
    expect(result[0].getMilliseconds()).to.equal(0);
  });

  it('should return an array of hours with the time of the input date when the third parameter has the false value', () => {
    const result = hours(now, 10, false);
    expect(result[0].getMinutes()).to.equal(now.getMinutes());
    expect(result[0].getSeconds()).to.equal(now.getSeconds());
    expect(result[0].getMilliseconds()).to.equal(now.getMilliseconds());
  });

  it('should start from entered time', () => {
    const result = hours(now, 10, true);
    expect(result[0].getHours()).to.equal(now.getHours());
  });
});
