const { response } = require("express");
const EmprestimoModel = require("../model/EmprestimoModel");

class EmprestimoController {
   async create(req, res) {
      const Emprestimo = new EmprestimoModel(req.body);

      await Emprestimo.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
      }
   
 //rota para buscar por id //

 async getById(req, res) {
   await EmprestimoModel.find({
      _id: req.params.id 
   })
      .then((response) => {
         return res.status(200).json(response);
      })
      .catch((error) => {
         return res.status(500).json(error);
      });
}
   //rota para atualizar tarefa//
   async update(req, res) {
      await EmprestimoModel.findByIdAndUpdate(
         { _id: req.params.id },
         req.body,
         {
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
      await EmprestimoModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new EmprestimoController();
