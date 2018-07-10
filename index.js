import express from 'express';


const app = express();

const PORT = 3000;


app.get('/', function (req, res) {
    
    res.send(`Node and express server is running on port ${PORT}`);

});

app.listen(PORT, function () {
    
    console.log(`Your server is running on port ${PORT}`);

});