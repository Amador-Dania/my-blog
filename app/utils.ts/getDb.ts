import pgPromise from "pg-promise";
import { createSingleton } from "./createSingleton";

const pgPromiseInitialized = pgPromise();

export function getDbConnection() {
  const dbConfig = {
    host: "localhost",
    port: 5432,
    database: "myblog",
    user: "postgres",
    password: "postgres",
  };

  return pgPromiseInitialized(dbConfig);
}

export const db = createSingleton("db", getDbConnection);
