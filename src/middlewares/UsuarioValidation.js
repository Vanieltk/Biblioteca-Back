const UsuarioModel = require("../model/UsuarioModel");

const { isPast } = require("date-fns"); // pacote que faz com que eu tenho controle de data e hora//

const UsuarioValidation = async (req, res, next) => {
   const {
      cpf,
      emailaddress,
      nomecompleto,
      datanascimento,
      logadouro,
      cep,
      bairro,
      cidade,
      estado,
      telefone,
   } = req.body;

   if (!cpf) {
      return res.status(400).json({ error: "CPF é obrigatorio" });
   } else if (!emailaddress) {
      return res.status(400).json({ error: "emailaddress é obrigatorio" });
   } else {
      let exists;

      // para executar o update quando for pelo id//
      if (req.params.id) {
         exists = await UsuarioModel.findOne({
            _id: { $ne: req.params.id },
            emailaddress: { $in: new String(emailaddress) },
            cpf: { $in: cpf },
         });
      }
      //caso seja apenas um update simples executar essa parte//
      else {
         exists = await UsuarioModel.findOne({
            emailaddress: { $in: new String(emailaddress) },
            cpf: { $in: cpf },
         });
      }
      // Para caso tenha algum usuário ou obra literária cadastrada//
      if (exists) {
         return res.status(400).json({ error: "já existe esse cadastro" });
      }
      next();
   }
};
module.exports = UsuarioValidation;
