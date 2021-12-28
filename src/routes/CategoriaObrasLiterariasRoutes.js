const express = require("express");
const router = express.Router();

const CategoriaObrasLiterariasController = require("../controller/CategoriaObrasLiterariasController");
//const LivroValidation = require("../middlewares/CategoriaObrasLiterariasValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //CategoriaObrasLiterariasValidation,
   CategoriaObrasLiterariasController.create
);

//rota de update //
router.put("/:id", CategoriaObrasLiterariasController.update);
router.get(
   "/filter/all",

   CategoriaObrasLiterariasController.all
);

module.exports = router;
