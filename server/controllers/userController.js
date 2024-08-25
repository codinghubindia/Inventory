const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

// Function to Generate token using jwt

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// @route POST /api/users/register
// function to register User

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password , role} = req.body;

    // Cheking if the User Already Exists
    const userExists = await User.findOne({ email });

    if(userExists) {
        return res.status(400),json({ message: 'User Already Exists' });
    }

    // Creating a User

    const user = await User.create({name, email, password, role});

    if(user) {
        const {_id, name, email, role} = user;

        res.status(201).json({
            _id, name, email, role
        });
    } else {
        res.status(400).json({message: 'Invalid User Data try again'});
    }
})

//function to auteticate the user
//@route POST /api/users/auth

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && user.matchPassword(password)) {
        const {_id, name, email, role} = user;
        const token = generateToken(_id);

        res.json({
            _id,
            name,
            email,
            role,
            token
        });
    } else {
        res.status(401).json({message: 'Invalid email or Password'});
    }
});

// Getting User Profile
//@route GET /api/users/userprofile
// Function to get user profile

const getUser = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    const user = User.findOne({_id});

    const{id, name, email, role} = user;

    if(user) {
        res.json({
            id,
            name,
            email,
            role
        });
    } else {
        res.status(404).json({messsage: 'User not found'});
    }
});

//Update User
//@route PUT /api/users/profile
//function to update user

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findOneById(req.user._id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.role = req.body.role || user.role;
        if(req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        const {_id, name, email, role} = updatedUser;

        res.json({
            _id,
            name,
            email,
            role
        });
    } else {
        res.status(404).json({message: 'User not Found'});
    }
});

module.exports = { registerUser, authUser, getUser, updateUser };