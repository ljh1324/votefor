export const deepCopy = obj => {
  if (!(obj instanceof Object)) {
    return obj;
  }

  let clone;
  if (obj instanceof Array) {
    clone = [];
  } else {
    clone = {};
  }

  for (var i in obj) {
    if (obj[i] instanceof Object) clone[i] = deepCopy(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
};
