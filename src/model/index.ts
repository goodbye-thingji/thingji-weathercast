import { Sequelize } from "sequelize";
import dbconfig from "../config/dbconfig";

const { NODE_ENV } = process.env;

const { database, username, password, host } =
  dbconfig[NODE_ENV === "development" ? "development" : "production"];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

export default sequelize;
