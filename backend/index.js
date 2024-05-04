const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
require("./database/conn")
app.use(express.json())
app.use(require("./router/nav"))

const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//   console.log("welcome to middleware");
//   next();
// };
    

app.listen(PORT, () => {
  console.log("server runing");
});
