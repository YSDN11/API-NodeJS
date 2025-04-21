const snackService = require('../services/snackService');

exports.createSnack = (req, res) => {
    snackService
        .createSnack(req.body)
        .then((snack) => res.status(201).json(snack))
        .catch((err) => {
            console.error('Erro ao criar o lanche:', err);
            res.status(400).json({ error: err.message });
        });
};

exports.getSnacks = (req, res) => {
    snackService
        .getSnacks()
        .then((snacks) => res.status(200).json(snacks))
        .catch((err) => {
            console.error('Erro ao listar os lanches:', err);
            res.status(500).json({ error: err.message });
        });
};

exports.getSnackById = (req, res) => {
    snackService
        .getSnackById(req.params.id)
        .then((snack) => res.status(200).json(snack))
        .catch((err) => {
            console.error('Erro ao buscar o lanche:', err);
            res.status(404).json({ error: err.message });
        });
};

exports.updateSnack = (req, res) => {
    snackService
        .updateSnack(req.params.id, req.body)
        .then((updatedSnack) => res.status(200).json(updatedSnack))
        .catch((err) => {
            console.error('Erro ao atualizar o lanche:', err);
            res.status(400).json({ error: err.message });
        });
};

exports.deleteSnack = (req, res) => {
    snackService
        .deleteSnack(req.params.id)
        .then(() => res.status(200).json({ message: 'Lanche deletado com sucesso.' }))
        .catch((err) => {
            console.error('Erro ao deletar o lanche:', err);
            res.status(404).json({ error: err.message });
        });
};
