import '../src/config/env';
import db from '../src/database';
import { areaList } from '../src/config/area';

const makeArray = (size, initValue = 0) => {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr.push(initValue);
  }

  return arr;
};

const createRankingData = async () => {
  const votes = await db.Vote.findAll({ raw: true });
  const promises = await db.ElectionPromise.findAllPromises();

  const ranking = {};
  const size = promises.length;

  for (let i = 10; i <= 80; i += 10) {
    ranking[i] = {
      count: 0,
      voted: makeArray(size)
    };
  }
  ranking['man'] = {
    count: 0,
    voted: makeArray(size)
  };
  ranking['woman'] = {
    count: 0,
    voted: makeArray(size)
  };
  ranking['total'] = {
    count: 0,
    voted: makeArray(size)
  };
  ranking['unknown'] = {
    count: 0,
    voted: makeArray(size)
  };

  areaList.forEach(area => {
    ranking[area] = {
      count: 0,
      voted: makeArray(size)
    };
  });

  votes.forEach(item => {
    const { age, gender, area, vote } = item;
    const genderKey = gender === 1 ? 'man' : 'woman';
    const areaKey = area === -1 ? 'unknown' : areaList[area];
    const voteList = vote.split(',');

    ranking[genderKey].count += 1;
    ranking[age].count += 1;
    ranking[areaKey].count += 1;
    ranking['total'].count += 1;

    voteList.forEach(v => {
      v = parseInt(v);
      ranking[genderKey].voted[v] += 1;
      ranking[age].voted[v] += 1;
      ranking[areaKey].voted[v] += 1;
      ranking['total'].voted[v] += 1;
    });
  });

  db.Ranking.create({
    date: Date.now(),
    rangking: JSON.stringify(ranking)
  });
};

createRankingData();
