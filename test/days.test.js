'use strict';
const expect = require('chai').expect;
const { days } = require('../lib/index.js');

const now = new Date(2022, 3, 25); // 2022.4.25

describe('days function test', () => {
  it('should return an array of 10 dates', () => {
    const length = 10;
    const result = days(now, length, true);
    expect(result.length).to.equal(length);
  });

  it('should be sorted in descending order at 1-day intervals', () => {
    const result = days(now, 10, true);
    expect(result[1].getDate()).to.lt(result[0].getDate());
    expect(result[1].getDate() - result[0].getDate()).to.equal(-1);
  });

  it('should return an array of dates with midnight time', () => {
    const result = days(now, 10, true);
    expect(result[0].getHours()).to.equal(0);
    expect(result[0].getMinutes()).to.equal(0);
    expect(result[0].getSeconds()).to.equal(0);
    expect(result[0].getMilliseconds()).to.equal(0);
  });

  it('should return an array of dates with the time of the input date when the third parameter has the false value', () => {
    const result = days(now, 10, false);
    expect(result[0].getHours()).to.equal(now.getHours());
    expect(result[0].getMinutes()).to.equal(now.getMinutes());
    expect(result[0].getSeconds()).to.equal(now.getSeconds());
    expect(result[0].getMilliseconds()).to.equal(now.getMilliseconds());
  });

  it('should start from entered date', () => {
    const result = days(now, 10, true);
    expect(result[0].getDate()).to.equal(now.getDate());
  });
});
