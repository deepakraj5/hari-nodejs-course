const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    approved: {
        type: Boolean,
        default: false
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User