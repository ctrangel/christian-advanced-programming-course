const express = require("express");


const app = express();
const port = 8003;


app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Henlo");
})

app.listen(port, () => {
    console.log("running on port", port);
})