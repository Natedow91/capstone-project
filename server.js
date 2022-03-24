const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(4080, () => console.log("server is running on 4080"));
