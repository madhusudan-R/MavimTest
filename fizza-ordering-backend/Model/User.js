const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
},
{ timestamps: true}
);

<<<<<<< HEAD
module.exports = mongoose.model('User',userSchema);
=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> 03d82fff419e4cb40534d9261e7e1ed74cee8729
