import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import logger from "morgan";

import api from "./api";
import sequelize from "./model";

dotenv.config();

const { NODE_ENV, PORT } = process.env;

const app = express();

if (!NODE_ENV) {
  throw Error("Error: NODE_ENV does not exist");
}

if (NODE_ENV === "production") {
  app.use(logger("short"));
} else if (NODE_ENV === "development") {
  app.use(logger("dev"));
} else {
  throw Error("Error: Invalid NODE_ENV");
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

app.listen(PORT || 3000, async () => {
  if (NODE_ENV === "development") {
    console.log(`Server listening on port ${PORT}`);
  }

  try {
    await sequelize.authenticate();
    console.log("Sequelize initialized");
  } catch (e) {
    throw e;
  }
});
