/* esta es una función de ejemplo
 puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
window.example = example;*/

let filterData = () => {
  return 'filterData';
};

let sortData = () => {
  return 'sortData';
};

let computeStats = () => {
  return 'computeStats';
};

window.example = {
  filterData,
  sortData,
  computeStats
};
