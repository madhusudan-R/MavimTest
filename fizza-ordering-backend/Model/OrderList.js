const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Crust: {
        type: String,
        required: true,
    },
    Flavor: {
        type: String,
        required: true,
    },
    Size: {
        type: String,
        required: true
    },
    Table_No: {
        type: Number,
        required: true
    }
},
{ timestamps: true}
);

module.exports = mongoose.model('OrderList', orderSchema);