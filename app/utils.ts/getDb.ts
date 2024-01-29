import pgPromise from "pg-promise";

const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "myblog",
  user: "postgres",
  password: "postgres",
};

const pgPromiseInitialized = pgPromise();

const db = pgPromiseInitialized(dbConfig);

export default db;
