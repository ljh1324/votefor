const model = (sequelize, DataTypes) => {
  const Ranking = sequelize.define(
    'Ranking',
    {
      no: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      rangking: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      tableName: 'tbl_ranking',
      timestamps: false,
      paranoid: false,
      underscored: true
    }
  );

  return Ranking;
};

export default model;
