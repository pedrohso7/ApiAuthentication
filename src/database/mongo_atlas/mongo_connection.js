const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

try{
    mongoose.connect(process.env.URL_BASE, connectionParams);
} catch (error){
    throw "Não foi possível conectar ao banco de dados";
}

mongoose.Promise = global.Promise;

// console.log(mongoose);

module.exports = mongoose;