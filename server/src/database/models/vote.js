const model = (sequelize, DataTypes) => {
  const Vote = sequelize.define(
    'Vote',
    {
      no: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      gender: {
        // 1: 남, 2: 여
        type: DataTypes.INTEGER,
        allowNull: false
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vote: {
        type: DataTypes.TEXT
      }
    },
    {
      freezeTableName: true,
      tableName: 'tbl_vote',
      timestamps: false,
      paranoid: false,
      underscored: true
    }
  );

  return Vote;
};

export default model;
