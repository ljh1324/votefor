import { areaList } from '../config/area';

const isNumber = num => {
  if (Number.isInteger(parseInt(num, 10))) {
    return true;
  }
  return false;
};

const age = a => {
  if (!isNumber(a)) {
    return false;
  }

  if (a < 10 || a > 80 || a % 10 !== 0) {
    return false;
  }

  return true;
};

const range = (nums, start, end) => {
  const len = nums.length;

  return nums.filter(num => isNumber(num) && (start <= num && num <= end).length === len);
};

const unique = nums => {
  const key = {};
  let flag = true;

  nums.forEach(num => {
    if (!(num in key)) {
      key[num] = true;
    } else {
      flag = false;
    }
  });

  return flag;
};

const gender = num => {
  if (!isNumber(num)) {
    return false;
  }

  return num === 1 || num === 2;
};

const area = num => {
  if (!isNumber(num)) {
    return false;
  }

  return -1 <= num && num < areaList.length;
};

export default {
  age,
  area,
  range,
  gender,
  unique
};
