require("dotenv").config();
const express = require("express");
const app = express();

const newRoutes = require("./routes/newRoutes");
const controller = require("./controllers/appController");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRoutes);

app.get("/", controller.getUserNames);

const PORT = 8080;
app.listen(PORT, "localhost", () => {
  console.log(`app listening at localhost/${PORT}`);
});
