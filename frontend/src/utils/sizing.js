export const getGraphSize = () => {
  if (window.innerWidth > 700) {
    return 250;
  } else if (window.innerWidth > 400) {
    return 200;
  }
  return 150;
};
