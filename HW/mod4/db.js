
import { Pool } from "pg";

const pool = new Pool({
    user: "ctrangel",
    host: "localhost",
    database: "inventory",
    port: 5432,
});

module.exports = pool;