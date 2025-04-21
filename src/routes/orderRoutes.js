const express = require('express');
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

const orderRoutes = express.Router();

orderRoutes.get('/orders/getOrders', authMiddleware, getOrders);
orderRoutes.get('/orders/getOrderById/:id', authMiddleware, getOrderById);
orderRoutes.post('/orders/createOrder', authMiddleware, createOrder);
orderRoutes.put('/orders/updateOrder/:id', authMiddleware, updateOrder);
orderRoutes.patch('/orders/updateOrderStatus/:id', authMiddleware, updateOrderStatus);
orderRoutes.delete('/orders/deleteOrder/:id', authMiddleware, deleteOrder);

module.exports = orderRoutes;