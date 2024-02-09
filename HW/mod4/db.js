
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ctrangel",
  host: "localhost",
  database: "inventory",
  port: 5432,
});

module.exports = pool;
