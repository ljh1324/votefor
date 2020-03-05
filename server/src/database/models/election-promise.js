const model = (sequelize, DataTypes) => {
  const ElectionPromise = sequelize.define(
    'ElectionPromise',
    {
      no: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      category_no: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
      },
      political_party_no: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
      },
      summary: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      contents: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      tableName: 'tbl_election_promise',
      timestamps: false,
      paranoid: false,
      underscored: true
    }
  );

  ElectionPromise.associate = ({ Category, PoliticalParty }) => {
    ElectionPromise.belongsTo(Category, { foreignKey: 'category_no', targetKey: 'no' });
    ElectionPromise.belongsTo(PoliticalParty, {
      foreignKey: 'political_party_no',
      targetKey: 'no'
    });
  };

  return ElectionPromise;
};

export default model;
