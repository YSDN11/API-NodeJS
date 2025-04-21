const bcrypt = require('bcrypt');
const User = require('../models/user');

const authenticateUser = async  (name, password) => {
    return User.findOne({ name })
        .then((user) => {
            if (!user) {
                return Promise.reject(new Error('Usuário não encontrado'));
            }

            return bcrypt.compare(password, user.password)
                .then((isMatch) =>{
                    if (!isMatch) {
                        return Promise.reject(new Error('Senha incorreta'));
                    }
                
                const { password, ...userWithoutPassword } = user.toObject();
                return userWithoutPassword;
            });
    });
};

module.exports ={
    authenticateUser,
};