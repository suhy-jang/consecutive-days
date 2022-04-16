'use strict';
const expect = require('chai').expect;
const index = require('../lib/index.js');

describe('days function test', () => {
  it('should return an array of consecutive dates with descending order', () => {
    const now = new Date(2022, 3, 25, 0, 0, 0, 0); // 2022.4.25
    const result = index.days(now, 3, 1);
    expect(result[1].getDate()).to.lt(result[0].getDate());
    expect(result[2].getDate()).to.lt(result[1].getDate());
  });

  it('should start from entered date', () => {
    const now = new Date(2022, 3, 25, 0, 0, 0, 0); // 2022.4.25
    const result = index.days(now, 3, 1);
    expect(result[0].getDate()).to.equal(now.getDate());
  });
});
