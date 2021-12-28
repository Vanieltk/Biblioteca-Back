const { response } = require("express");
const ReservaSitesModel = require("../model/ReservaSitesModel");

class ReservaSitesController {
   async create(req, res) {
      const ReservaSites = new ReservaSitesModel(req.body);

      await ReservaSites.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   //rota para atualizar tarefa//
   async update(req, res) {
      await ReservaSitesModel.findByIdAndUpdate(
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
      await ReservaSitesModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new ReservaSitesController();
