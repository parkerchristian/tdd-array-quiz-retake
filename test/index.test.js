const doIt = require('../lib/index');

describe('FILTER TEST', () => {

  it('returns numbers > 5 into string: Wow, ${number} is big!', () => {
    const arr = [1, 3, 5, 7, 2];
    const result = doIt(arr);
    expect(result).toEqual(['Wow, 7 is big!']);
  });

});
