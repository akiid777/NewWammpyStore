import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const client = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default client;
