import express from "express";

import mongoose from "mongoose";

import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";


const app = express();

const PORT = 3000;


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/CRMdb", {

    useMongoClient: true

});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


routes(app);


app.use(express.static("public"));


app.get('/', function (req, res) {
    
    res.send(`Node and express server is running on port ${PORT}`);

});

app.listen(PORT, function () {
    
    console.log(`Your server is running on port ${PORT}`);

});