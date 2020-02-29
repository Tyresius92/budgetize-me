import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_DATABASE_USER,
  process.env.PG_DATABASE_PASSWORD,
  { dialect: "postgres" }
);

const models = {
  User: sequelize.import("./user"),
  Message: sequelize.import("./message"),
  Transaction: sequelize.import("./transaction"),
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
