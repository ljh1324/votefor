const fs = require('fs');

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

const rawData = fs.readFileSync('seed-data.json');
const jsonData = JSON.parse(rawData);
const { promises } = jsonData;

const categories = countWordsPerCategory(promises);
const categoryNames = extractCategoryNamesOrderdByCount(categories);

fs.writeFileSync('counting_appearance.json', JSON.stringify(categoryNames, null, 2));
fs.writeFileSync('counting_words.json', JSON.stringify(categories, null, 2));