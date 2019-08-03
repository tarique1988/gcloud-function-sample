const app = require("express")();
const cors = require("cors");
const route = require("./routes/index");

app.use(cors({ origin: true }));
app.use("/api", route);

module.exports = app;
