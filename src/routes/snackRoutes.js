const express = require('express');
const { createSnack, getSnacks, getSnackById, updateSnack, deleteSnack } = require('../controllers/snackController');
const authMiddleware = require('../middlewares/authMiddleware');

const snackRouter = express.Router();

snackRouter.get('/snacks/getSnacks', authMiddleware, getSnacks);
snackRouter.get('/snacks/getSnackById/:id', authMiddleware, getSnackById);
snackRouter.post('/snacks/createSnack', authMiddleware, createSnack);
snackRouter.put('/snacks/updateSnack/:id', authMiddleware, updateSnack);
snackRouter.delete('/snacks/deleteSnack/:id', authMiddleware, deleteSnack);

module.exports = snackRouter;