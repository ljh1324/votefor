const model = (sequelize, DataTypes) => {
  const PoliticalParty = sequelize.define(
    'PoliticalParty',
    {
      no: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      tableName: 'tbl_party',
      timestamps: false,
      paranoid: false,
      underscored: true
    }
  );

  PoliticalParty.associate = ({ ElectionPromise }) => {
    PoliticalParty.hasMany(ElectionPromise, { foreignKey: 'political_party_no', sourceKey: 'no' });
  };

  return PoliticalParty;
};

export default model;
