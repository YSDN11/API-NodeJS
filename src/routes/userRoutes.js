const express = require ('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser} = require ('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/users/createUser', createUser);
userRoutes.get('/users/getUsers', getUsers);
userRoutes.get('/users/getUser/:id', getUserById);
userRoutes.put('/users/updateUser/:id', updateUser);
userRoutes.delete('/users/deleteUser/:id', deleteUser);

module.exports = userRoutes;