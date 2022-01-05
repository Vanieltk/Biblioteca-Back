const { response } = require("express");
const CategoriaObraLiterariaModel = require("../model/CategoriaObraLiterariaModel");
const ObraLiterariaModel = require("../model/ObraLiterariaModel");

class ObraLiterariaController {
   async create(req, res) {
      const CategoriaObraLiteraria = await CategoriaObraLiterariaModel.findOne({
         _id: req.body.idCategoriaObraLiteraria,
      });

      let ObraLiteraria = new ObraLiterariaModel(req.body);
      ObraLiteraria.categoria_obra_literaria = CategoriaObraLiteraria;

      await ObraLiteraria.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   // listagem de apenas um ObraLiteraria

   async getById(req, res) {
      await ObraLiterariaModel.find({
         _id: req.params.id,
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
      await ObraLiterariaModel.findByIdAndUpdate(
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
   //filtro listagem por um parametro//
   async all(req, res) {
      await ObraLiterariaModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new ObraLiterariaController();
