const usersControllers = require('../controllers/usersControllers');
const {body}= require ('express-validator');
const validateCreate= [
    body ('name').notEmpty().withMessage("Campo obligatorio"),
    body ('lastName').notEmpty().withMessage("Campo obligatorio"),
    body ('email').isEmail().withMessage("Ingresé un mail válido"),
    body ('password').notEmpty().withMessage("Debe ingresar una contraseña"),
];
const express = require('express');
const router = express.Router();

router.get('/crear_cuenta',usersControllers.crear_cuenta);

router.post('/crear_cuenta',validateCreate,usersControllers.procesoCrearCuenta);

router.get('/login',usersControllers.login);

router.post('/login', usersControllers.procesoLogin);

router.get('/perfil',usersControllers.perfil);

router.get('/logout',usersControllers.logout);

module.exports = router;