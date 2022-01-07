const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const ReservaObraLiterariaSchema = new Schema({
   leitor: { type: String, required: true },
   obra_literaria: { type: String, required: true },
   data_prevista_retirada: { type: Date, required: true },
   data_prevista_devolucao: { type: Date, required: true },
   data_reserva: { type: Date, required: true },
   funcionario: { type: String },
   finalizado: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Reserva", ReservaObraLiterariaSchema);
