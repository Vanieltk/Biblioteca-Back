const mongoose = require("../config/database");
//const TaskValidation = require("../middlewares/TaskValidation");

const Schema = mongoose.Schema;

const LivroSchema = new Schema({
   titulo: { type: String, required: true },
   autor: { type: String, required: true },
   idioma: { type: String, required: true },
   area_conhecimento: { type: String, requered: true },
   data_publicacao: { type: Date, required: true },
   done: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Livro", LivroSchema);
