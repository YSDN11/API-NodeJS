const orderRepository = require('../repositories/orderRepository');

const updateOrder = (id, orderData) => {
    const { snack, customer, status, quantity } = orderData;

    if (!id) {
        return Promise.reject(new Error('ID do pedido é obrigatório'));
    }
    if (!snack || !customer || !status || !quantity) {
        return Promise.reject(new Error('Todos os campos são obrigatórios'));
    }

    return orderRepository.updateOrder(id, { snack, customer, status, quantity })
};

const getOrders = () => {
    return orderRepository.getOrders()
        .then((orders) => orders)
        .catch((err) => {
            console.error('Erro ao listar pedidos:', err);
            throw new Error('Erro ao listar pedidos');
        });
};

const getOrderById = (id) => {
    if (!id) {
        return Promise.reject(new Error('ID do pedido é obrigatório'));
    }
    return orderRepository.getOrderById(id)
        .then((order) => order)
        .catch((err) => {
            console.error('Erro ao listar pedido:', err);
            throw new Error('Erro ao listar pedido');
        });
};

const deleteOrder = (id) => {
    if (!id) {
        return Promise.reject(new Error('ID do pedido é obrigatório'));
    }
    return orderRepository.deleteOrder(id)
        .then((deletedOrder) => deletedOrder)
        .catch((err) => {
            console.error('Erro ao deletar pedido:', err);
            throw new Error('Erro ao deletar pedido');
        });
};

const updateOrderStatus = (id, status) => {
    if (!id) {
        return Promise.reject(new Error('ID do pedido é obrigatório'));
    }
    else if (!status) {
        return Promise.reject(new Error('Status do pedido é obrigatório'));
    }
    return orderRepository.updateOrderStatus(id, status)
        .then((updatedOrder) => updatedOrder)
        .catch((err) => {
            console.error('Erro ao atualizar status do pedido:', err);
            throw new Error('Erro ao atualizar status do pedido');
        });
};

const createOrder = (orderData) => {
    const { snack, customer, status, quantity } = orderData;

    if (!snack || !customer || !status || !quantity) {
        return Promise.reject(new Error('Todos os campos são obrigatórios'));
    }

    return orderRepository.createOrder({ snack, customer, status, quantity })
        .then((order) => order)
        .catch((err) => {
            console.error('Erro ao criar pedido:', err);
            throw new Error('Erro ao criar pedido');
        });
};

module.exports ={
    updateOrder,
    getOrders,
    getOrderById,
    deleteOrder,
    updateOrderStatus,
    createOrder,
}