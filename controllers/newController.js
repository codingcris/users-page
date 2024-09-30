const path = require("path");
const db = require("../db/queries");

module.exports = {
  get: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/new.html"));
  },
  post: async (req, res) => {
    let username = req.body.username;
    await db.insertUsername(username);
    res.redirect("/");
  },
};
