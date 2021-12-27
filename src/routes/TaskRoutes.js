const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middlewares/TaskValidation");
const MacaddressValidation = require("../middlewares/MacaddressValidation");

//validar primeiro depois executar os outros parametros//
router.post("/", TaskValidation, TaskController.create);

//rota de update //
router.put("/:id", TaskController.update);
router.get("/filter/all", MacaddressValidation, TaskController.all);

module.exports = router;
