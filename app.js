const express = require("express");
const data = require("./data/data.json").projects;

const app = express();
app.set("view engine", "pug");
//static middleware
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  // console.log(req)
  res.render("index", { data });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project/:id", (req, res) => {
  const id = req.params.id;
  const project = data[id];
  console.log(data[id]);
  res.render("project", { project });
});
//Error handling

// 404 error handling
app.use((req, res, next) => {
  const error = new Error("Page not Found!");
  error.status = 404;
  console.log("Sorry, this page is not available");
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
