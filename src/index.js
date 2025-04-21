require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/docs/swagger.yml');

const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const orderRoutes = require('./routes/orderRoutes');
const snackRoutes = require('./routes/snackRoutes');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use('/', userRoutes, homeRoutes, loginRoutes, orderRoutes, snackRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Servidor rodando! http://localhost:${port}`);
    console.log(`Documentação Swagger: http://localhost:${port}/swagger`);
});