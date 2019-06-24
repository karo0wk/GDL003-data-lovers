require('../src/data.js');


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof example.filterData).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(example.filterData()).toBe('filterData');
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof example.sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(example.sortData()).toBe('sortData');
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof example.computeStats).toBe('function');
  });

  it('returns `computeStats`', () => {
    expect(example.computeStats()).toBe('computeStats');
  });
});
