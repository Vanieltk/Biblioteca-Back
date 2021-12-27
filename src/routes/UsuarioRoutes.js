const express = require('express');
const router = express.Router();

const UsuarioController = require('../controller/UsuarioController')
const UsuarioValidation = require('../middlewares/UsuarioValidation')
const CPFValidation = require('../middlewares/CPFValidation');
const emailaddressValidation = require('../middlewares/emailaddressValidation');

//validar primeiro depois executar os outros parametros//
router.post('/', emailaddressValidation, CPFValidation, UsuarioValidation, UsuarioController.create);

//rota de update //
router.put('/:id', UsuarioController.update);
router.get('/filter/all', emailaddressValidation, CPFValidation, UsuarioController.all);

module.exports = router;

