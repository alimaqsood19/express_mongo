const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Steals the promises from node

//If there is a environment variable MONGODB_URI connect to that OR connect to localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ex_db');

module.exports = mongoose;
