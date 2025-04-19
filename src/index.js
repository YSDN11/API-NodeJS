require('dotenv').config();

const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use('/', userRoutes, homeRoutes, loginRoutes);
app.listen( port, () => {
    console.log(`Servidor rodando! http://localhost:${port}`);
});