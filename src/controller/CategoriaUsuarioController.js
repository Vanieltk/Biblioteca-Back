const { response } = require("express");
const CategoriaUsuarioModel = require("../model/CategoriaUsuarioModel");

class CategoriaUsuarioController {
   async create(req, res) {
      const CategoriaUsuario = new CategoriaUsuarioModel(req.body);
      await CategoriaUsuario.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   //rota para atualizar tarefa//
   async update(req, res) {
      await CategoriaUsuarioModel.findByIdAndUpdate(
         { _id: req.params.id },
         req.body,
         {
            new: true,
         }
      ) // esse new true é para devolver a tarefa atualizada//

         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }

   //filtro de listagem de apenas uma categoria
   async getById(req, res) {
      await CategoriaUsuarioModel.find({
         _id: req.params.id,
      })
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   //filtro listagem por um parametro//
   async all(req, res) {
      await CategoriaUsuarioModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new CategoriaUsuarioController();
