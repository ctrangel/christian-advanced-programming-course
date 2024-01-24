
const express = require('express');

const app =  express();

//Path to do something
app.get('/',(req, res) => {
    res.send("Hello World");

});

app.listen(5502, () => {
    console.log("Listening to the active port");
});