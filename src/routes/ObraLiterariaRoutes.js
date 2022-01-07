const express = require("express");
const router = express.Router();

const ObraLiterariaController = require("../controller/ObraLiterariaController");
const ObraLiterariaValidation = require("../middlewares/ObraLiterariaValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   ObraLiterariaValidation,
   ObraLiterariaController.create
);

//rota de id de um ObraLiteraria//
router.get('/:id', ObraLiterariaController.getById);

//rota de update //
router.put("/:id", ObraLiterariaController.update);
router.get(
   "/filter/all",

   ObraLiterariaController.all
);

module.exports = router;
