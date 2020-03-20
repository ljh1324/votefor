import status from 'http-status';

import db from '../../database';
import validator from '../../lib/validator';

const read = async (req, res, next) => {
  try {
    const promises = await db.ElectionPromise.findAllPromises();
    const categories = {};
    const parties = {};

    promises.forEach(promise => {
      const { summary, contents, no } = promise;
      const categoryName = promise['Category.name'];
      const partyName = promise['PoliticalParty.name'];
      let color;
      let image;

      if (!(partyName in parties)) {
        image = promise['PoliticalParty.image'];
        color = promise['PoliticalParty.color'];
        parties[partyName] = {
          name: partyName,
          color,
          image,
          selected: false
        };
      }
      if (!(categoryName in categories)) {
        categories[categoryName] = {
          voted: false,
          promises: []
        };
      }

      categories[categoryName].promises.push({
        no,
        summary,
        contents,
        voted: false,
        party: parties[partyName]
      });
    });

    res.json({ categories, parties });
  } catch (err) {
    next(err);
  }
};

const write = async (req, res, next) => {
  try {
    const { gender, age, vote } = req.body;
    if (!validator.gender(gender) || !validator.age(parseInt(age, 10))) {
      res.status(status.CONFLICT).json({});
    } else {
      const cnt = await db.ElectionPromise.count({});
      if (validator.range(vote, 1, cnt) && !validator.unique(vote)) {
        res.status(status.CONFLICT).json({});
      } else {
        db.Vote.create({
          age,
          gender,
          vote: vote.join(',')
        });
        res.status(status.CREATED).json({});
      }
    }
  } catch (err) {
    next(err);
  }
};

export default {
  read,
  write
};
