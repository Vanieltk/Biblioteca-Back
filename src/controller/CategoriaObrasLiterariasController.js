const { response } = require("express");
const CategoriaObrasLiterariasModel = require("../model/CategoriaObrasLiterariasModel");

class CategoriaObrasLiterariasController {
   async create(req, res) {
      const CategoriaObrasLiterarias = new CategoriaObrasLiterariasModel(
         req.body
      );
      await CategoriaObrasLiterarias.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   //rota para atualizar tarefa//
   async update(req, res) {
      await CategoriaObrasLiterariasModel.findByIdAndUpdate(
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
      await CategoriaObrasLiterariasModel.find({
         categoria_obras_literarias: { $in: req.body.cpf },
      })
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new CategoriaObrasLiterariasController();
