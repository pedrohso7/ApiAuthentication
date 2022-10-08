const mongoose = require('mongoose');

const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

try{
    mongoose.connect('mongodb+srv://pedrohso7:l6EUixKjWTR8F7Ox@answermecluster.z3txbov.mongodb.net/answerMeDB?retryWrites=true&w=majority', connectionParams);
} catch (error){
    throw "Não foi possível conectar ao banco de dados";
}

mongoose.Promise = global.Promise;

// console.log(mongoose);

module.exports = mongoose;