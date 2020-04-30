const express = require("express");
const data = require("./data/data.json").projects;

const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { data });
});

//static middleware
app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("server");
});
