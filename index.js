const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let winterArr = [
    "Backpack",
    "Daypack or Ski Pack",
    "Showshoes",
    "Skis",
    "Snowboard",
    "Ski Poles",
    "Trekking Poles",
    "Ice Axe",
    "Avalanche Trasceiver",
    "Avalanche Probe",
    "Snow Shovel",
    "Snow Saw",
    "Hand/Foot Warmers",
    "Radio",
    "Binoculars",
    "Winter Rated Tent",
];
let summerArr = [
    "Tent",
    "Tarp",
    "Sun Shade",
    "Ground Pad",
    "Sleeping Bag",
    "Camp Chair",
    "Lip Balm",
    "Hat",
    "Swimsuit",
    "First-Aid Kit",
    "Multi-Tool",
    "Firewood",
    "Tongs",
    "Knife",
    "Hot Dogs",
    "Whiskey",
];
let springArr = [
    "Tent",
    "Sleeping bag",
    "Camp pillow",
    "Flashlight/Lantern",
    "Camp table",
    "Camp chairs",
    "Camp stove/Fire stand",
    "Matches/lighter",
    "Pots and pans",
    "Plates and utensils",
    "Cooler",
    "Food",
    "Drinks",
    "Water bottle",
    "Trash Bag",
    "Biodegradable soap",
    "Camp sink",
    "Towel",
    "Knife",
    "Hammer",
    "Duct Tape",
    "Bluetooth speaker",
    "Food/snacks",
    "shoes/sandals",
    "Rain jacket",
    "First-aid kit",
    "Insect repellent",
    "Toiletries",
    "Hammock",
    "Firewood",
    "Axe or saw",
    "Rope or cord",
    "Hot dog forks",
    "warm clothes for night",
    "Sun hat",
    "Sunglasses",
    "Lip Balm",
];
let fallArr = [
    "Tent",
    "Tarp",
    "Rain jacket",
    "Sleaping bag for cooler weather",
    "Camp Chair",
    "Fishing gear",
    "Firewood",
    "Matches/lighter",
    "Food/snacks",
    "Cooler",
    "Warm clothes",
];
let finalArr = [];

// Endpoint to retrieve checklist data
app.get("/api/checklist", (req, res) => {
    if (finalArr.length === 0) {
        res.status(400).send("Add some items to your checklist!");
    } else {
        res.status(200).send(finalArr);
    }
});

// Endpoints to retrieve season data
app.get("/api/winter", (req, res) => {
    res.status(200).send(winterArr);
});
app.get("/api/summer", (req, res) => {
    res.status(200).send(summerArr);
});
app.get("/api/spring", (req, res) => {
    res.status(200).send(springArr);
});
app.get("/api/fall", (req, res) => {
    res.status(200).send(fallArr);
});
// Endpoint to add data to checklist
app.post("/api/add", (req, res) => {
    let incomingItem = req.body.item;
    for (let i = 0; i < finalArr.length; i++) {
        if (finalArr[i] === incomingItem) {
            return res.status(400).send("Item is already in list!");
        }
    }
    finalArr.push(incomingItem);
    res.status(200).send(finalArr);
});
app.post("/api/itemadded", (req, res) => {
    let itemToAdd = req.body.item;
    winterArr.push(itemToAdd);
    res.status(200).send(winterArr);
});

app.post("/api/summeradded", (req, res) => {
    let itemToAdd = req.body.item;
    summerArr.push(itemToAdd);
    res.status(200).send(summerArr);
});
app.post("/api/falladded", (req, res) => {
    let itemToAdd = req.body.item;
    fallArr.push(itemToAdd);
    res.status(200).send(fallArr);
});
app.post("/api/springadded", (req, res) => {
    let itemToAdd = req.body.item;
    springArr.push(itemToAdd);
    res.status(200).send(springArr);
});

app.listen(4080, () => console.log("Server is running on 4080"));
