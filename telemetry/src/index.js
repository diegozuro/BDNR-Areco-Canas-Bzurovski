const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/vehicles-info", require("./routes"));


app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});