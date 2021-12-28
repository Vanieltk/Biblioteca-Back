const express = require("express");
const router = express.Router();

const UsuarioController = require("../controller/UsuarioController");
const UsuarioValidation = require("../middlewares/UsuarioValidation");

const { body, validationResult } = require("express-validator");

const res = require("express/lib/response");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",
   body("emailaddress").isEmail().withMessage("Email inválido"),

   body("cpf").isLength({ min: 11 }).withMessage("CPF inválido"),

   UsuarioValidation,
   UsuarioController.create
);

//rota de update //
router.put("/:id", UsuarioController.update);
router.get(
   "/filter/all",

   UsuarioController.all
);

module.exports = router;
