import dotenv from "dotenv";

dotenv.config();

const {
  DEV_MYSQL_USER,
  DEV_MYSQL_PASSWORD,
  DEV_MYSQL_NAME,
  DEV_MYSQL_HOST,
  DEV_MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_NAME,
  MYSQL_HOST,
  MYSQL_PORT,
} = process.env;

if (
  !DEV_MYSQL_USER ||
  !DEV_MYSQL_PASSWORD ||
  !DEV_MYSQL_NAME ||
  !DEV_MYSQL_HOST ||
  !DEV_MYSQL_PORT ||
  !MYSQL_USER ||
  !MYSQL_PASSWORD ||
  !MYSQL_NAME ||
  !MYSQL_HOST ||
  !MYSQL_PORT
) {
  throw Error(`
    Error: one of the following variable is not defined: \n
    - DEV_MYSQL_USER
    - DEV_MYSQL_PASSWORD
    - DEV_MYSQL_NAME
    - DEV_MYSQL_HOST
    - DEV_MYSQL_PORT
    - MYSQL_USER
    - MYSQL_PASSWORD
    - MYSQL_NAME
    - MYSQL_HOST
    - MYSQL_PORT
  `);
}

const config = {
  development: {
    username: DEV_MYSQL_USER,
    password: DEV_MYSQL_PASSWORD,
    database: DEV_MYSQL_NAME,
    host: DEV_MYSQL_HOST,
    port: DEV_MYSQL_PORT,
    dialect: "mysql",
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_NAME,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: "mysql",
  },
};

export default config;
