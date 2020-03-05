import db from '../database';

const dbSync = async ({ force }) => {
  if (force) {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.sequelize.sync({ force });
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  } else {
    await db.sequelize.sync({ force });
  }
};

export default dbSync;
