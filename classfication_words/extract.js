const fs = require('fs');
const request = require('request');

const isWord = (str) => {
  if (!str.length) return false;

  let char;
  for (let i = 0; i < str.length; i++) {
    char = str[i].charAt(i);
    if (('0' <= char && char <= '9') || ('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z'))
      return false;
  }
  return true;
}

const convertUnnecessaryCharToBlank = (str) => {
  let newStr;
  let regExp = /[&\/\\#,+()$~%.'":*?!<>{}‘’·「」⋅_“”『』\-]/g

  newStr = str.replace(regExp, ' ');

  return newStr;
}

const countWordsPerCategory = (promises) => {
  const categories = promises.reduce((acc, item) => {
    const { category, summary, contents } = item;
    let sentence;

    if (!(item.category in acc)) {
      acc[category] = { count: 0 }
    }
    acc[category].count += 1;

    sentence = summary + ' ' + contents;
    sentence = convertUnnecessaryCharToBlank(sentence);

    let words = sentence.split(' ');
    words = words.reduce((acc, word) => {
      let strs = word.split('\n');
      acc = acc.concat(strs);
      return acc;
    }, []);

    words.forEach(word => {
      word = word.trim();
      if (isWord(word)) {
        if (!(word in acc[category])) {
          acc[category][word] = 0;
        }
        acc[category][word] += 1;
      }
    })

    return acc;
  }, {});

  return categories;
}

const sortByCount = (categories) => {
  const categoryList = Object.keys(categories)
    .reduce((acc, key) => {
      acc.push({ key, values: categories[key] });
      return acc;
    }, [])
    .sort((a, b) => {
      return b.values.count - a.values.count;
    });

  return categoryList;
}

const extractCategoryNamesOrderdByCount = (categories) => {
  let categoryNames = sortByCount(categories);
  categoryNames = categoryNames.map(category => { return { key: category.key, count: category.values.count } });
  return categoryNames;
}

// 참고: http://aiopen.etri.re.kr/guide_wiseNLU.php
const extractNouns = (text) => {
  const requestJson = {
    'access_key': ACCESS_KEY,
    'argument': {
      'text': text,
      'analysis_code': ANALYSIS_CODE
    }
  };

  const options = {
    url: URL,
    body: JSON.stringify(requestJson),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  };

  return new Promise((resolve, reject) => {
    request.post(options, function (error, response, body) {
      const { statusCode } = response;
      if (error || statusCode !== 200) {
        console.log(error);
        console.log(statusCode);
        reject(error);
      }
      const morphemesMap = {};

      const { return_object: { sentence: sentences } } = JSON.parse(body);
      sentences.forEach((sentence) => {
        const morphologicalAnalysisResult = sentence.morp;
        morphologicalAnalysisResult.forEach(morphemeInfo => {
          let { lemma, type } = morphemeInfo;
          if (!(lemma in morphemesMap)) {
            morphemesMap[lemma] = {
              text: lemma,
              type,
              count: 0
            }
          }
          morphemesMap[lemma].count += 1;
        });
      });

      const nouns = Object.values(morphemesMap).filter(({ type }) => type === 'NNG' || type === 'NNP' || type === 'NNB');
      resolve(nouns);
    });
  });
}

const countWordsPerCategoryUsingExtractNounsFunction = async (promises) => {
  const categories = {};
  let text, nouns;

  for (let i = 0; i < promises.length; i++) {
    const { category, summary, contents } = promises[i];
    text = summary + ' ' + contents;
    nouns = await extractNouns(text);

    if (!(category in categories)) {
      categories[category] = { count: 0 }
      categories[category].nouns = {};
    }
    categories[category].count += 1;

    nouns.forEach(({ text, count }) => {
      if (!(text in categories[category])) {
        categories[category].nouns[text] = 0;
      }
      categories[category].nouns[text] += count;
    });
  }

  return categories;
}

const extractPromisesIncludedText = (promises, text, total = false) => {
  return promises.filter(promise => {
    const { summary, contents } = promise;
    let sentence = summary;
    if (total) {
      sentence += " " + contents;
    }
    return sentence.indexOf(text) !== -1;
  });
}

const extractOnlyCategoryNames = (categories) => {
  categories = sortByCount(categories);
  return categories.map(category => { return { name: category.key } });
}

const rawData = fs.readFileSync('seed-data.json');
const jsonData = JSON.parse(rawData);
const { promises } = jsonData;

const rawConfigData = fs.readFileSync('config.json');
const { URL, ACCESS_KEY, ANALYSIS_CODE } = JSON.parse(rawConfigData);
const FOLDER = "result";

const run = async () => {
  // const categories = await countWordsPerCategoryUsingExtractNounsFunction(promises);
  // const categoryNames = extractCategoryNamesOrderdByCount(categories);

  // fs.writeFileSync(`${FOLDER}/counting_words.json`, JSON.stringify(categories, null, 2));
  // fs.writeFileSync(`${FOLDER}/counting_appearance.json`, JSON.stringify(categoryNames, null, 2));

  // const text = '';
  // const promisesIncludedText = extractPromisesIncludedText(promises, text, true);
  // fs.writeFileSync(`${FOLDER}/word_${text}_appearance.json`, JSON.stringify(promisesIncludedText, null, 2));

  const categories = countWordsPerCategory(promises);
  const categoryNames = extractOnlyCategoryNames(categories);

  fs.writeFileSync(`${FOLDER}/categories.json`, JSON.stringify(categoryNames, null, 2));
}

run();