import db from '../../database';

const read = async (req, res, next) => {
  try {
    const promises = await db.ElectionPromise.findAllPromises();
    const categories = {};
    const parties = {};

    promises.forEach(promise => {
      const { summary, contents } = promise;
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
          image
        };
      }
      if (!(categoryName in categories)) {
        categories[categoryName] = {
          voted: false,
          promises: []
        };
      }

      categories[categoryName].promises.push({
        summary,
        contents,
        voted: false,
        party: parties[partyName]
      });
    });

    res.json({ categories });
  } catch (err) {
    next(err);
  }
};

export default {
  read
};
