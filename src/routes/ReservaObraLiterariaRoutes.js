const express = require("express");
const router = express.Router();

const ReservaObraLiterariaController = require("../controller/ReservaObraLiterariaController");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //ReservaObraLiterariaValidation,
   ReservaObraLiterariaController.create
);

//rota de update //
router.put("/:id", ReservaObraLiterariaController.update);
router.get(
   "/filter/all",

   ReservaObraLiterariaController.all
);

module.exports = router;
