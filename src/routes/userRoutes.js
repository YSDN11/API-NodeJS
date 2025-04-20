const express = require ('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser} = require ('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const userRoutes = express.Router();

userRoutes.post('/users/createUser', authMiddleware, createUser);
userRoutes.get('/users/getUsers', authMiddleware, getUsers);
userRoutes.get('/users/getUser/:id', authMiddleware, getUserById);
userRoutes.put('/users/updateUser/:id', authMiddleware, updateUser);
userRoutes.delete('/users/deleteUser/:id', authMiddleware, deleteUser);

module.exports = userRoutes;