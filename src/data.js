window.example={

 filterData : () => {
  return 'filterData';
},


sortData : (input, sortBy, sortOrder) => {
  let output;
  if (sortOrder == "Ascendente") {
    output = input.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  if (sortOrder == "Descendente") {
    output = input.sort((b, a) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return output;
},


 computeStats : () => {
  return 'computeStats';
}

};