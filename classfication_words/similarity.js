const fs = require('fs');

const counting = (A) => {
  return Object.values(A).reduce((sum, count) => sum + count, 0);
}

const intersection = (A, B) => {
  const C = JSON.parse(JSON.stringify(A));

  Object.entries(C).forEach((element) => {
    const [key] = element;
    if (key in B) {
      if (C[key] > B[key]) {
        C[key] = B[key];
      }
    } else {
      delete C[key];
    }
  });

  return C;
}

const union = (A, B) => {
  const C = JSON.parse(JSON.stringify(A));

  Object.entries(B).forEach((element) => {
    const [key, count] = element;
    if (key in C) {
      if (C[key] < count) {
        C[key] = count;
      }
    } else {
      C[key] = count;
    }
  });

  return C;
}

const calculateJaccardDistance = (A, B) => {
  const unionSet = union(A, B);
  const intersectionSet = intersection(A, B);

  return counting(intersectionSet) / counting(unionSet);
}

const calculateJaccardDistances = (categories) => {
  const jaccardDistances = [];
  let keyA, keyB, nounsA, nounsB;

  for (let i = 0; i < categories.length; i++) {
    keyA = categories[i][0];
    nounsA = categories[i][1].nouns;

    for (let j = i + 1; j < categories.length; j++) {
      keyB = categories[j][0];
      nounsB = categories[j][1].nouns;

      jaccardDistances.push({
        keys: `${keyA}-----${keyB}`,
        dist: calculateJaccardDistance(nounsA, nounsB)
      });
    }
  }

  jaccardDistances.sort((a, b) => {
    return b.dist - a.dist
  });

  return jaccardDistances;
}

const run = () => {
  const FOLDER = "result";
  const rawData = fs.readFileSync(`${FOLDER}/counting_words.json`);
  const categories = Object.entries(JSON.parse(rawData));

  const jaccardDistances = calculateJaccardDistances(categories);

  fs.writeFileSync(`${FOLDER}/jaccard-distances.json`, JSON.stringify({ jaccard: jaccardDistances }, null, 2));
}

run();