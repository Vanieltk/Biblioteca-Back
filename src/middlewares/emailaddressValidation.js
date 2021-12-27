const emailaddressValidation = (req, res, next) => {

    if (!req.body.emailaddress) {
        return res.status(400).json({ error: 'email é obrigatório'});
   
    }else{}

    next();


}

module.exports = emailaddressValidation;