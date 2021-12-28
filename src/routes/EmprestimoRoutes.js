const express = require("express");
const router = express.Router();

const EmprestimoController = require("../controller/EmprestimoController");
//const LivroValidation = require("../middlewares/EmprestimoValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //EmprestimoValidation,
   EmprestimoController.create
);

//rota de update //
router.put("/:id", EmprestimoController.update);
router.get(
   "/filter/all",

   EmprestimoController.all
);

module.exports = router;
