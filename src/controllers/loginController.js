const loginService = require('../services/loginService');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ message: 'Nome ou senha não informados'});
    }

    loginService
        .authenticateUser(name, password)
        .then((user) => {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login realizado com sucesso', token, user });
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao autenticar o usuário:', err);
            return res.status(401).json({ message: err.message });
        })
}