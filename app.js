const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(cors({ origin: config.clientUrl }));
app.use(express.json());

app.get("/", (req, res) => res.send("Riseway API is running"));
app.use("/api/messages", messageRoutes);

module.exports = app;