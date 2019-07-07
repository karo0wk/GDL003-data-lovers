require('../src/data.js');


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof example.filterData).equalTo('function');
  });

  it('returns `filterData`', () => {
    expect(example.filterData()).equalTo('filterData');
  });
});



describe ('sortData', () => {
  it ('is a function', () => {
    expect (typeof example.sortData).equalTo('function');
  });

  it('Debería retornar el listado LOL de manera ascenente', () => {
    let input = [{"name": "Teemo"},{"name": "Gnar"},{"name": "Ahri"}];
    let sortBy = "name";
    let sortOrder = "Ascendente";
    expect(example.sortData(input, sortBy, sortOrder)).equalTo([{"name": "Ahri"},{"name": "Gnar"},{"name": "Teemo"}]);
  });
  it('Debería retornar retornar el listado LOL descendente', () => {
    let input = [{"name": "Gnar"},{"name": "Teemo"},{"name": "Ahri"}];
    let sortBy = "name";
    let sortOrder = "Descendente";
    expect(example.sortData(input, sortBy, sortOrder)).equalTo([{"name": "Teemo"},{"name": "Gnar"},{"name": "Ahri"}]);
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


