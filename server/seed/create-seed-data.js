import fs from 'fs';
import path from 'path';

import '../src/config/env';
import db from '../src/database';

const contents = fs.readFileSync(path.join(__dirname, 'seed-data.json'));
const { participants, categories, parties, promises } = JSON.parse(contents);
const { force } = process.env;

/**
 * participants: []   참여정당
 *
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

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createCategoriesData = async () => {
  const results = await db.Category.bulkCreate(categories);

  return results;
};

const createPartiesData = async () => {
  parties.forEach((party, idx) => {
    const { color } = party;
    if (color === '') {
      parties[idx].color = generateRandomColor();
    }
  });

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

  const participantsMap = participants.reduce((map, participant) => {
    map[participant] = true;
    return map;
  }, {});

  const partyList = await db.PoliticalParty.findAll({});
  const partyObj = partyList.reduce((acc, item) => {
    const { name, no } = item;
    acc[name] = no;
    return acc;
  }, {});

  const newPromises = promises.filter(promise => {
    const { party } = promise;
    return party in participantsMap;
  });

  newPromises.forEach((promise, idx) => {
    const { category, party } = promise;

    newPromises[idx].category_no = categoryObj[category];
    newPromises[idx].political_party_no = partyObj[party];
  });

  const results = await db.ElectionPromise.bulkCreate(newPromises);

  return results;
};

const createSeedData = async () => {
  await db.sequelize.sync({ force });

  await createCategoriesData();
  await createPartiesData();
  await createPromisesData();
};

createSeedData();
