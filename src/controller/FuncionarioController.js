const { response } = require("express");
const FuncionarioModel = require("../model/FuncionarioModel");

class FuncionarioController {
   async create(req, res) {
      const Funcionario = new FuncionarioModel(req.body);

      await Funcionario.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   async update(req, res) {
      await FuncionarioModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
         new: true,
      })


         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }

   async all(req, res) {
      await FuncionarioModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new FuncionarioController();
