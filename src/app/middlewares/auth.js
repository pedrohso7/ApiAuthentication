const jwd = require('jsonwebtoken');

const authConfig = require('../../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader)
        return res.status(401).send({ error: 'Sem autorização' });

    const splittedAuthHeader = authHeader.split(' ');

    if(splittedAuthHeader.length != 2)
        return res.status(401).send({ error: 'Token mal formulado' });

    const [ scheme, token ] = splittedAuthHeader;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token inválido' });

    jwd.verify(token, authConfig.auth_key, (err, decoded) => {
        if(err)
            return res.status(401).send({ error: 'Token inválido' });

        req.userId = decoded.id;
    });

    return next();
};