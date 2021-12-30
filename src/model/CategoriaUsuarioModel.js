const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const CategoriaUsuarioSchema = new Schema({
   nome_categoria_usuario: { type: String, required: true },
   descricao: {type: String, required: true},
   limite_tempo_emprestimo: { type: Number, required: true },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model(
   "CategoriaUsuario",
   CategoriaUsuarioSchema
);
