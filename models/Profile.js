const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location: {
        type: String
    },
    time: {
        type: String
    },
    products: [
        {
            title: {
                type: String
            },
            category: {
                type: String
            },
            productType: {
                type: String
            },
            description: {
                type: String
            },
            imageLink: {
                type: String
            },
            price: {
                type: Number
            },
            paymentMethod: {
                type: String
            },
            status: {
                type: String
            }
        }
    ],
    phoneNumber: {
        type: String
    },
    messages: [
        {
            from: {
                type: String
            },
            message: {
                type: String
            }
        }
    ],
    favourites: [
        {
            title: {
                type: String
            },
            category: {
                type: String
            },
            productType: {
                type: String
            },
            description: {
                type: String
            },
            imageLink: {
                type: String
            },
            price: {
                type: Number
            },
            paymentMethod: {
                type: String
            }
        }
    ],
    orders: [
        {
            title: {
                type: String
            },
            category: {
                type: String
            },
            productType: {
                type: String
            },
            description: {
                type: String
            },
            imageLink: {
                type: String
            },
            price: {
                type: Number
            },
            paymentMethod: {
                type: String
            }
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            },

        }
    ],
    productsOrdered: {
        type: Number
    },
    productsSold: {
        type: Number
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);