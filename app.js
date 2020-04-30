const express = require("express");
const data = require("./data/data.json").projects;

const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // console.log(req)
  res.render("index", { data });
});

app.get("/project/:id", (req, res) => {
  const id = req.params.id;
  const project = data[id];
  console.log(data[id])
  res.render("project", { project });
});

app.use((err, req, res, next)=>{
  // console.log(req.params)
  next()
})

//static middleware
app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("server");
});
