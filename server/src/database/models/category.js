const model = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      no: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      freezeTableName: true, // true일 경우 sequelize가 테이블명을 자동적으로 복수형으로 만들어 주는 것을 막음
      tableName: 'tbl_category',
      timestamps: false, // true일 경우 업데이트 시간, 생성 시간을 기록
      paranoid: false, // true일 경우 데이터 삭제시 데이터베이스에는 남아있고 삭제 시간을 남김 (timestamps가 enabled되어야 함)
      underscored: true // 자동적으로 추가되는 attribute에 underscore 표기법 사용(ex. updatedAt => updated_at)
      // charset: 'utf8',
      // collate: 'utf8_general_ci'
    }
  );

  Category.associate = ({ ElectionPromise }) => {
    Category.hasMany(ElectionPromise, { foreignKey: 'category_no', sourceKey: 'no' });
  };

  return Category;
};

export default model;
