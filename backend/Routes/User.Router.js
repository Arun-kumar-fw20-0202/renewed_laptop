const express = require('express');
const UserModel = require('../Models/UserModel');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

userRouter.use(express.json())

// Register Route
userRouter.post('/register', async (req, res) => {
    const { email, name, password, gender, phone, avatar } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({
                email,
                email,
                name,
                password: hash,
                gender,
                phone,
                avatar
            })
            await user.save()
            res.status(200).send({ msg: "Registration has been successfully registered" })
        })
    } catch (err) {
        res.status(400).send({ msg: err.message })
    }
})


// Login Route

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ msg: "login sucessfull", token: jwt.sign({ userID: user._id }, process.env.secrate_code) })
                }
            })
        }
    }
    catch (err) {
        res.status(400).send({ msg: err.message })
    }
})


module.exports = userRouter