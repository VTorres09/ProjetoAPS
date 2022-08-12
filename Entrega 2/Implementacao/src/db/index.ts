import { Pool } from "pg";

const pool = new Pool({
  user: "iineeugr",
  host: "motty.db.elephantsql.com",
  port: 5432,
  database: "iineeugr",
  password: "Fp1_8Y1HQsFaJlblMdsx3MtWk5VnjcUn",
});

export default pool;