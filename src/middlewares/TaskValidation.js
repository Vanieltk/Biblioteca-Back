const TaskModel = require('../model/TaskModel');

const {isPast} = require("date-fns") // pacote que faz com que eu tenho controle de data e hora//

const TaskValidation = async (req, res, next) => {

    const { macaddress,emailaddress, type, title, description, when } = req.body;

    if(!macaddress){
        return res.status(400).json({ error: 'macaddress é obrigatorio'});
    }
     else if (!emailaddress){
        return res.status(400).json({ error: 'emailaddress é obrigatorio'});
    }
    else if (!when)
        return res.status(400).json({ error: 'data e hora são obrigatorio'}); 
  
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: 'escolha uma data e hora futura'})
    else {
        let exists;

        // para executar o update quando for pelo id//
        if(req.params.id){
            exists = await TaskModel.
                            findOne (
                              {     '_id': {'$ne': req.params.id},
                                    'emailaddress': {'$in': new String(emailaddress)},
                                    'macaddress': {'$in': macaddress},
                              });
                    }
       //caso seja apenas um update simples executar essa parte//
        else{
        
        exists = await TaskModel.
                            findOne(
                                   { 'emailaddress': {'$in': new String(emailaddress)},
                                    'macaddress': {'$in': macaddress}
                        });
                    }
// Para caso tenha algum usuário ou obra literária cadastrada//
        if (exists){
            return res.status(400).json({ error: 'já existe esse cadastro'})  
        }
    next();
}
}
module.exports = TaskValidation;