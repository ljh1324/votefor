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
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING(7),
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
