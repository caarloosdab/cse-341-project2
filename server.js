const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database')
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Z-key"
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})
app.use('/', require('./routes'));


mongodb.intDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
})