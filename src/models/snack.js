const mongoose = require('mongoose');

const SnackSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: false,
            trim: true,
        },
        ingredients: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0.01
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Snack', SnackSchema);