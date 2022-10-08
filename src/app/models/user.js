const mongoose = require('../../database/mongo_atlas/mongo_connection');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    resetTokenExpiration: {
        type: String,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const user = mongoose.model('user', userSchema);

module.exports = user;