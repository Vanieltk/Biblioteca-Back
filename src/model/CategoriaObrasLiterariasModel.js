const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const CategoriaObrasLiterariasSchema = new Schema({
   categoria_obras_literarias: { type: String, required: true },
   tempo_devolucao: { type: Date, required: true },
   done: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model(
   "CategoriaObrasLiterarias",
   CategoriaObrasLiterariasSchema
);
