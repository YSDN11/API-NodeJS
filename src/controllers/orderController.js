const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
    const { snack, customer, status, quantity } = req.body;

    orderService
        .createOrder({ snack, customer, status, quantity })
        .then((order) => {
            return res.status(201).json({ message: 'Pedido criado com sucesso', order })
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao atualizar o pedido: ', err);
            return res.status(400).json({ message: err.message });
        });
};

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { snack, customer, status, quantity } = req.body;

    orderService
        .updateOrder(id, { snack, customer, status, quantity })
        .then((updatedOrder) => {
            return res.status(201).json({ message: 'Pedido atualizado com sucesso', updatedOrder });
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao atualizar o pedido: ', err);
            return res.status(400).json({ message: err.message });
        });
};

exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    orderService
        .getOrderById(id)
        .then((order) => {
            if (!order) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            return res.status(200).json(order);
        })
        .catch((err) =>{
            console.error('Ocorreu um erro ao listar o pedido:', err);
            return res.status(400).json({ message: err.message });
        });
};

exports.getOrders = async (req, res) => {
    orderService
        .getOrders()
        .then((orders) => {
            return res.status(200).json(orders);
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao listar os pedidos:', err);
            return res.status(400).json({ message: err.message });
        });
}

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    orderService
        .deleteOrder(id)
        .then((deletedOrder) => {
            return res.status(200).json({ message: 'Pedido deletado com sucesso', deletedOrder });
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao deletar o pedido:', err);
            return res.status(400).json({ message: err.message });
        });
};

exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    orderService
        .updateOrderStatus(id, status)
        .then((updatedOrder) => {
            return res.status(200).json({ message: 'Status do pedido atualizado com sucesso', updatedOrder });
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao atualizar o status do pedido:', err);
            return res.status(400).json({ message: err.message });
        });
};