export const objectToList = (obj, keyName = "key") =>
  Object.keys(obj).reduce((acc, key) => {
    acc.push({ [keyName]: key, ...obj[key] });
    return acc;
  }, []);
