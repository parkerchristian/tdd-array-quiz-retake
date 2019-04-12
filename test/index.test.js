const { doit } = require('../lib/index');

describe('FILTER', () => {

  it('filter array', () => {
    const arr = [1, 3, 5, 7, 2];
    const result = doit(arr);
    expect(result).toEqual(['Wow, 7 is big!']);
  });

});
