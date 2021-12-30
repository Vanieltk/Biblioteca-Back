const express = require("express");
const router = express.Router();

const CategoriaUsuarioController = require("../controller/CategoriaUsuarioController");


//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   CategoriaUsuarioController.create
);

// rota de id Categoria//
router.get('/:id', CategoriaUsuarioController.getById)

//rota de update //
router.put("/:id", CategoriaUsuarioController.update);
router.get(
   "/filter/all",

   CategoriaUsuarioController.all
);

module.exports = router;