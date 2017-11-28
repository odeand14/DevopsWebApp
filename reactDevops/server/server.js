const path = require('path');


const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use("/", cors());


const PORT = process.env.PORT || 1234;


app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')));

app.use('/favicon.ico', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'favicon.ico'));
});

app.use('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.listen(PORT, () => console.log("Listening on port " + PORT + "!"));
