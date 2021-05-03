const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./asgn-router.js');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/asgn", {useNewUrlParser: true});

if(!mongoose.connection) {
    console.log("Error connecting to the DB");
} else {
    console.log("DB connected successfully");
}

const port = 8080;

app.get('/', (req, res) => res.send("There's nothing here yet. Try /asgn"))
app.use('/api', router);

app.listen(port, function () {
    console.log("Server launched on port " + port);
});