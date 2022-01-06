const express = require("express");
const router = express.Router();

const CategoriaObraLiterariaController = require("../controller/CategoriaObraLiterariaController");
//const ObraLiterariaValidation = require("../middlewares/CategoriaObraLiterariaValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //CategoriaObraLiterariaValidation,
   CategoriaObraLiterariaController.create
);

// rota de id Categoria//
router.get("/:id", CategoriaObraLiterariaController.getById);

//rota de update //
router.put("/:id", CategoriaObraLiterariaController.update);
router.get(
   "/filter/all",

   CategoriaObraLiterariaController.all
);

module.exports = router;
