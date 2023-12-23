const express = require("express");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("dragon in running");
});

app.get("/catagories", (req, res) => {
  res.send(categories);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const singleNews = news.find((n) => n._id === id);
  res.send(singleNews);
});

app.get("/category/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
