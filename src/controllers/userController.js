const User = require('../model/user');
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    userService
        .createUser(req.body)
        .then((user) => res.status(201).json(user))
        .catch(error => {
            console.error('Erro ao criar o usuário:', error);
            res.status(500).json({ error: "Erro ao criar o usuário" });
        });
};

exports.getUsers = (req, res) => {
    User.find()
        .then(users => res.status(201).json(users))
        .catch(error => {
            console.error('Erro ao listar usuários:', error);
            res.status(500).json({ error: "Erro ao buscar usuários" });
        });
};

exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            res.status(201).json(user);
        })
        .catch(error => {
            console.error('Erro ao listar usuários:', error);
            res.status(500).json({ error: "Erro ao buscar usuários" });
        });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    
    userService
        .updateUser(id, { name, email, password })
        .then(updatedUser => {
            res.status(200).json({ message: 'Usuário atualizado com sucesso: ', user: updatedUser });
        })
        .catch(error => {
            console.error('Erro ao atualizar o usuário: ', error);
            res.status(400).json({ error: error.message });
        })
}

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: "Usuário não encontrado" });
            }
            res.status(201).json(user);
        })
        .catch(error => {
            console.error('Erro ao deletar o usuário:', error);
            res.status(500).json({ error: "Erro ao deletar o usuário" });
        });
}