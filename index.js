const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let checklistArr = ["tent", "chair"];
let finalArr = [];

app.get("/api/winter/", (req, res) => {
    res.status(200).send(checklistArr);
});
app.post("/api/winter/", (req, res) => {
    let incomingItem = req.body;
    finalArr.push(incomingItem);
    res.status(200).send(finalArr);
});

app.listen(4080, () => console.log("server is running on 4080"));
