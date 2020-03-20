import fs from 'fs';
import path from 'path';

import '../src/config/env';
import db from '../src/database';

const contents = fs.readFileSync(path.join(__dirname, 'seed-data.json'));
const { categories, parties, promises } = JSON.parse(contents);
const { force } = process.env;

/**
 * categories: [
 *  {
 *    name: ""        카테고리명
 *  }
 * ]
 *
 * parties: [
 *  {
 *    name: "",       정당명
 *    image: ""       정당 로고 파일 위치
 *  }
 * ]
 *
 * promises: [
 *  {
 *    category: "",   카테고리명
 *    party: "",      정당명
 *    summary: "",    정책 요약
 *    contents: ""    정책 내용
 *  }
 * ]
 */

const createCategoriesData = async () => {
  const results = await db.Category.bulkCreate(categories);

  return results;
};

const createPartiesData = async () => {
  const results = await db.PoliticalParty.bulkCreate(parties);

  return results;
};

const createPromisesData = async () => {
  const categoryList = await db.Category.findAll({});
  const categoryObj = categoryList.reduce((acc, item) => {
    const { name, no } = item;
    acc[name] = no;
    return acc;
  }, {});

  const partyList = await db.PoliticalParty.findAll({});
  const partyObj = partyList.reduce((acc, item) => {
    const { name, no } = item;
    acc[name] = no;
    return acc;
  }, {});

  promises.forEach((item, idx) => {
    const { category, party } = item;
    promises[idx].category_no = categoryObj[category];
    promises[idx].political_party_no = partyObj[party];
  });

  const results = await db.ElectionPromise.bulkCreate(promises);

  return results;
};

const createSeedData = async () => {
  await db.sequelize.sync({ force });

  await createCategoriesData();
  await createPartiesData();
  await createPromisesData();
};

createSeedData();
