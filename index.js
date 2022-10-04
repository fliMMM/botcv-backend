const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require('./routes/auth')
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connect to db");
  })
  .catch((e) => {
    console.log("connect to db faile");
  });

app.use('/api/v1/auth', authRoute);

app.listen(process.env.PORT || 5555, () => {
  console.log("server is running at ", process.env.PORT || 5555);
});