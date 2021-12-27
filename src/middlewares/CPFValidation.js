const CPFValidation = (req, res, next) => {
   if (!req.body.cpf) {
      return res.status(400).json({ error: "cpf é obrigatório" });
   } else {
   }

   next();
};

module.exports = CPFValidation;
