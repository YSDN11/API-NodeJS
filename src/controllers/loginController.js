const loginService = require('../services/loginService');

exports.login = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ message: 'Nome ou senha não informados'});
    }

    loginService
        .authenticateUser(name, password)
        .then((user) => {
            return res.status(200).json({ message: 'Login realizado com sucesso', user });
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao autenticar o usuário:', err);
            return res.status(401).json({ message: err.message });
        })
}