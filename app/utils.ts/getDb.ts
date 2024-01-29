import pgPromise from "pg-promise";

export default async function getDb() {
  // in production, we would use environment variables instead of hardcoding the values
  const dbConfig = {
    host: "localhost",
    port: 5432,
    database: "myblog",
    user: "postgres",
    password: "postgres",
  };

  const pgPromiseInitialized = pgPromise();

  const db = pgPromiseInitialized(dbConfig);

  try {
    const connection = await db.connect();
    console.log("Connected to the database");
    connection.done(); // release connection
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

  return db;
}
