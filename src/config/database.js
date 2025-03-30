const mongoose = require ('mongoose');

const dbConnection = async () => {
    
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected!'))
    .catch(error => {
        console.error('MongoDB connection error: ', error)
        process.exit(1);
    })
}

module.exports = dbConnection;
// In this code, we define a function dbConnection that connects to MongoDB using the mongoose library.