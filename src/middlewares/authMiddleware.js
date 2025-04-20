const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token){
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    })
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch((err) => {
            console.error('Erro ao verificar o token:', err);
            res.status(401).json({ message: 'Token inválido' });
        });
};

module.exports = authMiddleware