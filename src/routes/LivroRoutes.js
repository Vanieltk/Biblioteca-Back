const express = require("express");
const router = express.Router();

const LivroController = require("../controller/LivroController");
const LivroValidation = require("../middlewares/LivroValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   LivroValidation,
   LivroController.create
);

//rota de update //
router.put("/:id", LivroController.update);
router.get(
   "/filter/all",

   LivroController.all
);

module.exports = router;
