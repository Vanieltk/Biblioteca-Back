const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const ObraLiterariaSchema = new Schema({
   titulo: { type: String, required: true },
   autor: { type: String, required: true },
   idioma: { type: String, required: true },
   area_conhecimento: { type: String, requered: true },
   data_publicacao: { type: Date, required: true },
   categoria_obra_literaria: { type: Object },
   done: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("ObraLiteraria", ObraLiterariaSchema);
