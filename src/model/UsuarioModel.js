const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
   cpf: { type: String, required: true },
   emailaddress: { type: String, required: true },
   nomecompleto: { type: String, required: true },
   datanascimento: { type: Date, requered: true },
   logadouro: { type: String, required: true },
   cep: { type: String, required: true },
   numero: { type: Number, required: true },
   bairro: { type: String, required: true },
   cidade: { type: String, required: true },
   estado: { type: String, required: true },
   telefone: { type: String, required: true },
   categoria_usuario: {type: Schema.Types.ObjectId, ref:'CategoriaUsuario'},
   senha: {type: String, required: true},
   done: { type: Boolean, default: false },
   create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
