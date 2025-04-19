const bcrypt = require('bcrypt');
const User = require('../model/user');
const e = require('express');

const saltRounds = 10;

const createUser = async (userData) => {
    return bcrypt
        .hash(userData.password, saltRounds)
        .then((hashedPassword) => {
            const user = new User({
                name : userData.name,
                email : userData.email,
                password : hashedPassword,
            });
            return user.save();
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    createUser,
};

