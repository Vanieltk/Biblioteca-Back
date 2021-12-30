const { response } = require("express");
const CategoriaObraLiterariaModel = require("../model/CategoriaObraLiterariaModel");

class CategoriaObraLiterariaController {
   async create(req, res) {
      const CategoriaObraLiteraria = new CategoriaObraLiterariaModel(
         req.body
      );
      await CategoriaObraLiteraria.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   //rota para atualizar tarefa//
   async update(req, res) {
      await CategoriaObraLiterariaModel.findByIdAndUpdate(
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
      await CategoriaObraLiterariaModel.find({
         _id: req.params.id 
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
      await CategoriaObraLiterariaModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new CategoriaObraLiterariaController();
