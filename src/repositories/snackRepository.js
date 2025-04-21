const Snack = require('../models/snack')

const createSnack = async (snackData) => {
    return Snack.create(snackData)
        .then((snack) => snack)
        .catch((err) => {
            console.error('Erro ao criar lanche: ', err);
            throw new Error('Erro ao criar lanche');
        });
};

const getSnacks = async () => {
    return Snack.find()
        .then((snacks) => snacks)
        .catch((err) => {
            console.error('Erro ao listar lanches: ', err);
            throw new Error('Erro ao listar lanches');
        });
};

const getSnacksById = async (id) => {
    return Snack.findById(id)
        .then((snack) => {
            if (!snack) {
                throw new Error('Lanche não encontrado');
            }
            return snack;
        })
        .catch((err) => {
            console.error('Erro ao listar lanche: ', err);
            throw new Error('Erro ao listar lanche');
        });
};

const updateSnack = async (id, snackData) => {
    return Snack.findByIdAndUpdate(id, snackData)
        .then((updatedSnack) => {
            if (!updatedSnack) {
                throw new Error('Lanche não encontrado');
            }
            return updatedSnack;
        })
        .catch((err) => {
            console.error('Erro ao atualizar lanche: ', err);
            throw new Error('Erro ao atualizar lanche');
        });
};

const deleteSnack = async (id) => {
    return Snack.findByIdAndUpdate(id)
        .then((deletedSnack) => {
            if (!deletedSnack) {
                throw new Error('Lanche não encontrado');
            }
            return deletedSnack;
        })
        .catch((err) => {
            console.error('Erro ao deletar lanche: ', err);
            throw new Error('Erro ao deletar lanche');
        });
};

module.exports = {
    createSnack,
    getSnacks,
    getSnacksById,
    updateSnack,
    deleteSnack,
};
