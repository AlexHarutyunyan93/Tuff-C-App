const config = require('../config.json');
const mongoose = require('mongoose');

const options = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };
const connectionString = process.env.MONGODB_URI || config.connectionString;

mongoose.connect(connectionString, options);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model'),
    Category: require('../models/special-category.model'),
};
