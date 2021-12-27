const { response } = require("express");
const LivroModel = require("../model/LivroModel");

class LivroController {
   async create(req, res) {
      const Livro = new LivroModel(req.body);
      await Livro.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
   //rota para atualizar tarefa//
   async update(req, res) {
      await LivroModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
         new: true,
      }) // esse new true é para devolver a tarefa atualizada//

         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }
   //filtro listagem por um parametro//
   async all(req, res) {
      await LivroModel.find({ titulo: { $in: req.body.cpf } })
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new LivroController();
