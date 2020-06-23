const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use('/api', require('./routes.js'));
};

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/fullflow', { useNewUrlParser: true});

app.use('/api', require('./routes.js'));

app.listen(PORT, () => {
    console.log(`Server is running at: localhost:${PORT}`)
})
