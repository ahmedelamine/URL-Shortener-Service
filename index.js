const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(5000, () => console.log("Server runing in PORT 5000"));
