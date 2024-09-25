const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config()

const confirmationRoutes = require("./routes/confirmation");
const studentRoutes = require("./routes/student");
const forumRoutes = require("./routes/forum");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json()); 
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("educolab-api is online.");
  next();
});

app.use(confirmationRoutes);
app.use(studentRoutes);
app.use(forumRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server listening on port 3000.");
    });
  })
  .catch((err) => console.log(err));
