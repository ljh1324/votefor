export const sortBy = (list, key) => {
  list.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    else if (a[key] === b[key]) return 0;
    else return 1;
  });
};
