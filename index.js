const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./View/Router");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/test", router);

mongoose
  .connect("mongodb://localhost:27017/Backend")
  .then(() => {
    port = 4000;
    console.log(`DB Connected to the port ${port}`);
    app.listen(port);
  })
  .catch((err) => {
    console.err(`DB Error`, err);
  });
