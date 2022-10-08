const express = require('express');

const User = require('../models/user');

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwd = require('jsonwebtoken');

const crypto = require('crypto');

const authConfig = require('../../config/auth');

const nodemailer = require('../modules/mailer');

function generateJwdToken(userId){
    return jwd.sign({ id: userId }, authConfig.auth_key, { expiresIn: 86400 });
}

router.post('/register', async (req, res) => {
    try{
        const usr = await User.create(req.body);
        usr.password = undefined;
        return res.send({ 
            usr,
            token: generateJwdToken(usr.id)
        });
    } catch(e){
        return res.status(500).send({ error : 'Email cadastrado'});
    }
});

router.get('/login', async (req, res) => {
    try{
        const { email, password } = req.query;
        
        const usr = await User.findOne({ email }).select('+password');

        if(!usr)
            return res.status(400).send({ error: 'Usuário não cadastrado'});
        
        if(!await bcrypt.compare( password, usr.password))
            return res.status(400).send({ error: 'Senha incorreta'});

        usr.password = undefined;

        return res.status(200).send({ 
            usr, 
            token: generateJwdToken(usr.id)
        });
    } catch(e){
        return res.status(500).send({ error : 'Erro no login'});
    }
});

router.get('/token', async (req, res) => {
    try{
        const { token, userId } = req.query;

        const response = jwd.verify(token, authConfig.auth_key, function (err, decoded) {
            if (err) return false;
            
            if(decoded.id == undefined) return false;
            if(decoded.id == userId) return true;
            if(decoded.id != userId) return false;
        });
        res.send(response);
    } catch(e){
        return res.status(500).send({ error : 'Erro ao verificar token' });
    }
});

router.get('/retrieve-password', async (req, res) => {
    try{
        const { email } = req.body;  
        
        const usr = await User.findOne({ email });

        if(!usr)
            return res.status(400).send({ error: 'Usuário não cadastrado'});
        
        const passwordResetToken = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(usr.id, {
            '$set': {
                passwordResetToken,
                resetTokenExpiration: now
            }
        });

        // nodemailer.sendMail({
        //     to: email,
        //     from: 'pholiveira1998@hotmail.com',
        //     template: '/retrieve_password/retrieve_password',
        //     context: 
        // })

        return res.status(200).send({ ok: true });
    } catch(e){
        return res.status(500).send({ error : 'Erro enviar email de confirmação'});
    }
});

module.exports = app => app.use('/auth', router);