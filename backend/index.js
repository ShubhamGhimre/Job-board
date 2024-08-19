const port = 4000;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const exp = require('constants');
const { type } = require('os');


app.use(express.json());
app.use(cors());

// Connect to MongoDB with error handling
mongoose.connect('mongodb+srv://shubham0011ghimire:Kurenai@cluster0.xxo7c.mongodb.net/jobportal');
mongoose.connection.on('error', (error) => {
    console.log('Error connecting to MongoDB', error);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error running the server');
    }
    else {
        console.log('Server is running on port', port);
    }
});