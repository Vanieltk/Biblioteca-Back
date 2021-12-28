const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const ReservaSitesSchema = new Schema({
   leitor: { type: String, required: true },
   livro: { type: String, required: true },
   data_prevista_retirada: { type: Date, required: true },
   data_prevista_devolucao: { type: Date, required: true },
   data_reserva: { type: Date, required: true },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Reserva", ReservaSitesSchema);
