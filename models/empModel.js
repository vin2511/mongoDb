const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name']
    },
    email: {
        type: String,
        require: [true, 'Enter your email']
    },
    phone: {
        type: String,
        required: [true, 'Enter your no.']
    },

},
    { timestamps: true })

module.exports = mongoose.model("Employee_info:", empSchema)