import db from '../../database';

const read = async (req, res, next) => {
  try {
    const promises = await db.ElectionPromise.findAllPromises();
    promises.forEach((_, idx) => {
      delete promises[idx].category_no;
      delete promises[idx].political_party_no;
    });

    res.json({ promises });
  } catch (err) {
    next(err);
  }
};

export default {
  read
};
