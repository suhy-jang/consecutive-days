'use strict';
const expect = require('chai').expect;
const { weeks } = require('../lib/index.js');

const now = new Date(2022, 3, 25, 12); // 2022.4.25

describe('weeks function test', () => {
  it('should return an array of 10 weeks', () => {
    const length = 10;
    const result = weeks(now, length);
    expect(result.length).to.equal(length);
  });

  it('should be sorted in descending order at 1-week intervals', () => {
    const result = weeks(now, 10);
    expect(result[1].getDate()).to.lt(result[0].getDate());
    expect(result[1].getDate() - result[0].getDate()).to.equal(-7);
  });

  it('should start from the entered time', () => {
    const result = weeks(now, 10, true);
    expect(result[0].getDate()).to.equal(now.getDate());
  });

  it('should return an array of weeks with zero hours when the third parameter has the true value', () => {
    const result = weeks(now, 10, true);
    expect(result[0].getHours()).to.equal(0);
    expect(result[0].getMinutes()).to.equal(0);
    expect(result[0].getSeconds()).to.equal(0);
    expect(result[0].getMilliseconds()).to.equal(0);
  });

  it('should return an array of weeks with the time of the input date when the third parameter has the false value', () => {
    const result = weeks(now, 10, false);
    expect(result[0].getHours()).to.equal(now.getHours());
    expect(result[0].getMinutes()).to.equal(now.getMinutes());
    expect(result[0].getSeconds()).to.equal(now.getSeconds());
    expect(result[0].getMilliseconds()).to.equal(now.getMilliseconds());
  });

  it('should start from the first day of the week when the fourth parameter has true value', () => {
    const result = weeks(now, 10, true, true);
    expect(result.every((e) => e.getDay() === 0)).to.equal(true);
  });
});
