const express = require("express");
const router = express.Router();

const ReservaSitesController = require("../controller/ReservaSitesController");
//const LivroValidation = require("../middlewares/ReservaSitesValidation");

//validar primeiro depois executar os outros parametros//
router.post(
   "/",

   //ReservaSitesValidation,
   ReservaSitesController.create
);

//rota de update //
router.put("/:id", ReservaSitesController.update);
router.get(
   "/filter/all",

   ReservaSitesController.all
);

module.exports = router;
