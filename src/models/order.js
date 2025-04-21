const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema (
    {
        snack: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Snack",
            required: true,
        },
        customer: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ['Confirmed', 'In progress', 'Delivering', 'Finished'],
            required: true,
            default: 'Confirmed',
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Order', OrderSchema);
