const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app=express();

mongoose.connect('mongodb://shamelessAdmin:Drowssap21@ds229621.mlab.com:29621/shameless')

app.use(bodyParser.json())

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Listening on port 3001");
});