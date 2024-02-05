const express = require("express");

const app = express();

const data = [
  {
    name: "Brock Purdy",
    age: 24,
    city: "San Francisco",
    state: "California",
    id: 1
  },
  {
    name: "Patrick Mahomes",
    age: 21,
    city: "Kansas City",
    state: "Missouri",
    id: 2
  },
  {
    name: "Trevor Lawrence",
    age: 29,
    city: "Jacksonville",
    state: "Florida",
    id: 3
  }
];

//Path to do something
app.get("/", (req, res) => {
  res.status(500).json(data);
});

app.listen(5502, () => {
  console.log("Listening to the active port");
  console.log("http://localhost:5502");
});
