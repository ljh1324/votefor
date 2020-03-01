import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const { DB_SCHEMA, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_SCHEMA, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate().then(errors => {
  // 연결 확인
  if (errors) {
    console.log(errors);
  } else {
    console.log('DB Connection established successfully.');
  }
});

const MODEL_DIRECTORY = '/models';
const MODEL_DIRECTORY_PATH = path.join(__dirname, MODEL_DIRECTORY);

const directoryFiles = fs.readdirSync(MODEL_DIRECTORY_PATH);
const modelFiles = directoryFiles.filter(file => file.slice(-3) === '.js');

modelFiles.forEach(file => {
  const model = sequelize.import(path.join(MODEL_DIRECTORY_PATH, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
