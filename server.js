const exporess = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");

const app = exporess();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch(err => {
    console.log("mongoDb error", err);
  });

app.get("/", (req, res) => {
  res.send("hello !");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server  runining on port ${port}`);
});
