const snackRepository = require('../repositories/snackRepository');

const createSnack = (snackData) => {
    const { name, description, ingredients, price } = snackData;

    if (!name || !description || !ingredients || !price) {
        return Promise.reject(new Error('Todos os campos são obrigatórios'));
    }

    return snackRepository.createSnack({ name, description, ingredients, price })
        .then((snack) => snack)
        .catch((err) => {
            console.error('Erro ao criar lanche:', err);
            throw new Error('Erro ao criar lanche');
        });
};

const getSnacks = () => {
    return snackRepository.getSnacks()
        .then((snacks) => snacks)
        .catch((err) => {
            console.error('Erro ao listar lanches:', err);
            throw new Error('Erro ao listar lanches');
        });
};

const getSnackById = (id) => {
    if (!id) {
        return Promise.reject(new Error('ID do lanche é obrigatório'));
    }

    return snackRepository.getSnacksById(id)
        .then((snack) => snack)
        .catch((err) => {
            console.error('Erro ao listar lanche:', err);
            throw new Error('Erro ao listar lanche');
        });
};

const updateSnack = (id, snackData) => {
    const { name, description, ingredients, price } = snackData;

    if (!id) {
        return Promise.reject(new Error('ID do lanche é obrigatório'));
    }

    else if (!name || !description || !ingredients || !price) {
        return Promise.reject(new Error('Todos os campos são obrigatórios'));
    }
    return snackRepository.updateSnack(id, snackData)
        .then((snack) => snack)
        .catch((err) => {
            console.error('Erro ao atualizar lanche:', err);
            throw new Error('Erro ao atualizar lanche');
        });
};

const deleteSnack = (id) => {
    if (!id) {
        return Promise.reject(new Error('ID do lanche é obrigatório'));
    }
    return snackRepository.deleteSnack(id)
        .then((deletedSnack) => deletedSnack)
        .catch((err) => {
            console.error('Erro ao deletar lanche:', err);
            throw new Error('Erro ao deletar lanche');
        });
};

module.exports = {
    createSnack,
    getSnacks,
    getSnackById,
    updateSnack,
    deleteSnack
};