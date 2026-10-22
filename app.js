
const express = require("express");
const app = express();

app.use(express.json());



const itemRoutes = require("./src/routes/itemRoutes");
app.use("/api/items", itemRoutes);

module.exports = app;
