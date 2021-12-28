const express = require("express");
const router = express.Router();

const FuncionarioController = require("../controller/FuncionarioController");
//const LivroValidation = require("../middlewares/LivroValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //LivroValidation,
   FuncionarioController.create
);

//rota de update //
router.put("/:id", FuncionarioController.update);
router.get(
   "/filter/all",

   FuncionarioController.all
);

module.exports = router;