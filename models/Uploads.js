const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
});