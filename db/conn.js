require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/userLogin')
    .then(() => console.log('connected to mongodb!'))
    .catch(err => console.error('Something went wrong', err));