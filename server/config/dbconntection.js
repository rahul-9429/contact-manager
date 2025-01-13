const mongoose = require('mongoose');

const conncetDB = async () => {
    try{
        const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.cx6t4.mongodb.net/mycontacts?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = conncetDB;