const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const paymentSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    },
},{ timestamps: true })
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }
// npm i react-paypal-express-checkout --save
// client에서다운받아야 한다.