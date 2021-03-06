const { response } = require("express");
const ReservaObraLiterariaModel = require("../model/ReservaObraLiterariaModel");

class ReservaObraLiterariaController {
   async create(req, res) {
      const ReservaObraLiteraria = new ReservaObraLiterariaModel(req.body);

      await ReservaObraLiteraria.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   //rota para atualizar tarefa//
   async update(req, res) {
      await ReservaObraLiterariaModel.findByIdAndUpdate(
         { _id: req.params.id },
         req.body,
         {
            new: true,
         }
      )

         //esse new true é para devolver a tarefa atualizada//

         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }

   async all(req, res) {
      await ReservaObraLiterariaModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new ReservaObraLiterariaController();
