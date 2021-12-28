const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const EmprestimoSchema = new Schema({
   leitor: { type: String, required: true },
   livro: { type: String, required: true },
   data_emprestimo: { type: Date, default: Date.now() },
   data_devolucao: { type: Date, required: true },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Emprestimo", EmprestimoSchema);
