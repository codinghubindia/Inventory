const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//User Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Add a Email'],
        unique: [true, 'Entered Email Already Exists'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter a Password'],
        min:[6, 'Password Must be minimum 6 Characters']
    },
    role: {
        type: String,
        enum: ['admin', 'staff'],
        default: 'staff'
    }
}, {
    timestamps: true
});

// password encryption before saving

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
});

//password validiation method

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = new mongoose.model('user', userSchema);

module.exports = User;