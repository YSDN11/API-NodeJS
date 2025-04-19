const express = require('express');
const { login } = require('../controllers/loginController');

const loginRoutes = express.Router();

loginRoutes.post('/api/login', login);

module.exports = loginRoutes;