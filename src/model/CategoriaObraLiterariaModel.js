const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const CategoriaObraLiterariaSchema = new Schema({
   nome_categoria_obra_literaria: { type: String, required: true },
   descricao_categoria_obra_literaria: { type: String, required: true },
   prazo_emprestimo: { type: Number, required: true },
   taxa_diaria: { type: Number, required: true },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model(
   "CategoriaObraLiteraria",
   CategoriaObraLiterariaSchema
);
