const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const ObraLiterariaSchema = new Schema({
   titulo: { type: String, required: true },
   autor: { type: String, required: true },
   // idioma: { type: String, required: true },
   descricao_obra_literaria: {type:String},
   area_conhecimento: { type: String},
   data_publicacao: { type: Date, required: true },
   categoria_obra_literaria: { type: Schema.Types.ObjectId, ref:"CategoriaObraLiteraria"},
   done: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("ObraLiteraria", ObraLiterariaSchema);
