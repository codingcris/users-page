let db = require("../db/queries");

async function getUserNames(req, res) {
  let usernames = await db.getAllUsernames();

  res.send(usernames.map((user) => user.username).join(", "));
}

module.exports = { getUserNames };
