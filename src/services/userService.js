const bcrypt = require('bcrypt');
const User = require('../model/user');

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

const updateUser = async (id, userData) => {
    const { name, email, password } = userData;

    if ( !name || !email || !password ) {
        throw new Error('Preencha todos os campos');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    return User.findByIdAndUpdate(
        id,
        { name, email, password: hashedPassword, },
        { new: true }
    )

        .then((updatedUser) => {
            if(!updatedUser) {
                throw new Error('Usuário não encontrado');
            }
            return updatedUser;
        })
        .catch((err) => {
            console.log('Erro ao atualizar o usuário: ', err);
            throw new Error('Erro ao atualizar usuário');
        })
}

module.exports = {
    createUser,
    updateUser,
};

