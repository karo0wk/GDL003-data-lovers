// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = () => {
  return 'filterData';
};

const sortData = () => {
  return "sortData";
};

const computeStats = () => {
  return "computeStats";
};


window.example = {
  filterData,
  sortData,
  computeStats
};
