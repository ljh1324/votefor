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
        type: DataTypes.STRING(70),
        allowNull: false
      },
      contents: {
        type: DataTypes.TEXT,
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

  ElectionPromise.findAllPromises = () => {
    return ElectionPromise.findAll({
      raw: true,
      include: [
        { model: sequelize.models.Category, required: true },
        { model: sequelize.models.PoliticalParty, required: true }
      ]
    });
  };

  return ElectionPromise;
};

export default model;
