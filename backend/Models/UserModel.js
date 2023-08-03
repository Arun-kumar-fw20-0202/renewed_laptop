const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        phone: { type: String, required: true },
        avatar: { type: Date, required: true },
    },
    {
        versionKey: false,
    }
);

// Create the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
