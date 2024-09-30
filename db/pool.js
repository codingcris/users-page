const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "cristianreyes",
  database: "top_users",
  password: "Crisreyez1!",
  port: 5432, // The default port
});
