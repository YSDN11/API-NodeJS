const Order = require ('../models/order');

const updateOrder = async (id, updateFields) => {
    return Order.findByIdAndUpdate(id, updateFields, { new: true })
        .then((updatedOrder) => {
            if (!updatedOrder) {
                throw new Error ('Pedido não encontrado');
            }
            return updatedOrder;
        })
        .catch((err) => {
            console.error('Erro ao atualizar o pedido:', err);
            throw new Error ('Erro ao atualizar o pedido');
        });
}

const getOrders = async () =>{
    return Order.find()
        .populate('snack')
        .then((orders) => orders)
        .catch((err) => {
            console.error('Erro ao listar pedidos:', err);
            throw new Error ('Erro ao listar pedidos');
        });
};

const getOrderById = async (id) => {
    return Order.findById(id)
        .populate('snack')
        .then((order) => {
            if (!order) {
                throw new Error ('Pedido não encontrado');
            }
            return order;
        })
        .catch((err) => {
            console.error('Erro ao listar pedido: ', err);
            throw new Error ('Erro ao listar pedido');
        });
};

const deleteOrder = async (id) => {
    return Order.findByIdAndDelete(id)
        .then((deletedOrder) => {
            if (!deletedOrder) {
                throw new Error ('Pedido não encontrado');
            }
            return deletedOrder;
        })
        .catch((err) => {
            console.error('Erro ao deletar pedido: ', err);
            throw new Error ('Erro ao deletar pedido');
        })
}

const updateOrderStatus = async (id, status) => {
    return Order.findByIdAndUpdate(id, { status}, { new: true })
        .then((updatedOrder) => {
            if (!updatedOrder) {
                throw new Error ('Pedido não encontrado');
            }
            return updatedOrder;
        })
        .catch((err) => {
            console.error('Erro ao atualizar status do pedido: ', err);
            throw new Error ('Erro ao atualizar status do pedido');
        })
}

const createOrder = async (orderData) => {
    Order.create(orderData)
        .then((order) => order)
        .catch((err) => {
            console.error('Erro ao criar pedido: ', err);
            throw new Error ('Erro ao criar pedido');
        });
}

module.exports = {
    updateOrder,
    getOrders,
    getOrderById,
    deleteOrder,
    updateOrderStatus,
    createOrder,
}