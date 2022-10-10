const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); 

const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

try{
    mongoose.connect(process.env.DATABASE_URL, connectionParams);
} catch (error){
    throw "Não foi possível conectar ao banco de dados";
}

mongoose.Promise = global.Promise;

// console.log(mongoose);

module.exports = mongoose;