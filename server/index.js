const express = require("express");
const apiMocker = require("connect-api-mocker");

const port = 8080;
const app = express();

const cors = require("cors");
app.use(cors());

app.use("/", apiMocker("server"));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
