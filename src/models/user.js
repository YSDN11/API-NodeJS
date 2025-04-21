const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
//In this code, we define a Mongoose schema for a User model. The schema includes the following fields:
//TimeStamps is a mongoose option that automatically adds createdAt and updatedAt fields to the schema.