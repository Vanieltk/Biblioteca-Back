const ObraLiterariaModel = require("../model/ObraLiterariaModel");

const { body, validationResult } = require("express-validator");

const { isPast } = require("date-fns"); // pacote que faz com que eu tenho controle de data e hora//
const ObraLiterariaValidation = async (req, res, next) => {
   const {
      sbn,
      titulo,
      autor,
      idioma,
      area_conhecimento,
      data_publicacao,
      done,
      create,
   } = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   let exists;

   // //Buscar no Banco para verificar a existencia desse cadastro//

   // exists = await UsuarioModel.findOne({
   //    $or: [{ titulo: titulo }],
   // });
   // // console.log('exists', exists.emailaddress === new String(emailaddress))//

   // // Para caso tenha algum usuário ou obra literária cadastrada//
   // if (exists) {
   //    return res.status(400).json({ error: "ObraLiteraria já cadastrado" });
   // }

   next();
};
module.exports = ObraLiterariaValidation;
