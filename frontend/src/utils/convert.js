export const objectToList = (obj, keyName = "key") =>
  Object.keys(obj).reduce((acc, key) => {
    acc.push({ [keyName]: key, ...obj[key] });
    return acc;
  }, []);

export const slashToUnderline = str => {
  return str.replace("/", "_");
};

export const underlineToSlash = str => {
  return str.replace("_", "/");
};
