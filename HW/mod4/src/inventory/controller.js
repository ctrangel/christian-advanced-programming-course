const pool = require("../../db");
const queries = require("./queries");

const getInventory = (req, res) => {
  pool.query(queries.getInventory, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
    getInventory,
};
