const { response } = require('express');
const TaskModel = require('../model/TaskModel');

class TaskController {

  async  create (req, res) {
    const task = new TaskModel(req.body);
    await task
        .save()
        .then(response => {
            return res.status (200).json(response);
        })
        .catch(error => {
            return res.status (500).json(error);
        });
    
  }
// rota para atualizar tarefa//
  async update (req, res){
    await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true}) // esse new true é para devolver a tarefa atualizada//

    .then(response=> { 
      return res.status(200).json(response);
    } )
    .catch(error => {
      return res.status(500).json(error); // para retornar o erro interno //

    });
  }
//filtro listagem por um parametro//
  async all(req, res){
    
    await TaskModel.find({ macaddress: {'$in': req.body.macaddress }}) 
          .sort('when')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}

module.exports = new TaskController();