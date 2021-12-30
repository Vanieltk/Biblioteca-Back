const { response } = require("express");
const UsuarioModel = require("../model/UsuarioModel");
const CategoriaUsuarioModel = require("../model/CategoriaUsuarioModel");

class UsuarioController {
   async create(req, res) {

      let Usuario = new UsuarioModel(req.body);
      Usuario.categoria_usuario = req.body.idCategoriaUsuario

      await Usuario.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   //rota para atualizar tarefa//
   async update(req, res) {
      await UsuarioModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
         new: true, //esse new true é para devolver a tarefa atualizada//
      })
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }
   //rota para buscar por id //

   async getById(req, res) {
      await UsuarioModel.find({
         _id: req.params.id 
      }).populate('categoria_usuario')
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   async all(req, res) {
      await UsuarioModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new UsuarioController();
