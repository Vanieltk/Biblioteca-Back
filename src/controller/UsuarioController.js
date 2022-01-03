const bcrypt = require("bcrypt")
const UsuarioModel = require("../model/UsuarioModel");
const jwt = require("jsonwebtoken");

class UsuarioController {

   async create(req, res) {
      const { cpf, nomecompleto, emailaddress, senha, datanascimento,
         logadouro, cep, numero, bairro, cidade, estado,
         telefone } = (req.body)
      UsuarioModel.categoria_usuario = req.body.idCategoriaUsuario

      const salt = await bcrypt.genSalt(12)
      const hash = await bcrypt.hash(senha, salt);

      const usuario = new UsuarioModel({
         cpf, nomecompleto, emailaddress, senha: hash, datanascimento,
         logadouro, cep, numero, bairro, cidade, estado,
         telefone,
      })

      await usuario.save()
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   // async checktoken(req, res, next) {
   //    const authHeader = req.headers["authorization"];
   //    const token = authHeader && authHeader.split(" ")[1];

   //    if (!token) return res.status(401).json({ msg: "Acesso negado!" });

   //    try {
   //       const secret = process.env.SECRET;

   //       jwt.verify(token, secret);

   //       next();
   //    } catch (err) {
   //       res.status(400).json({ msg: "O Token é inválido!" });
   //    }
   // };

   async login(req, res) {
      const { emailaddress, senha } = req.body
      if (!emailaddress || !senha) {
         res.status(400).json({ erro: "Login ou senha Incorretos" })
         return;
      }

      const user = await UsuarioModel.findOne({ emailaddress: emailaddress })
      if (!user) {
         return res.status(422).json({ msg: 'Email não Cadastrado' })
      }

      const checkpass = await bcrypt.compare(senha, user.senha)

      if (!checkpass) {
         return res.status(422).json({ msg: 'senha Invalida' })
      }

      try {
         const secret = process.env.SECRET
         //console.log(emailaddress, senha, secret)
         const token = jwt.sign({
            id: user._id,
         },
            secret,
         )
         res.status(200).json({ msg: "Autenticação realizada com Sucesso", token })

      } catch (error) {
         res.status(500).json({ msg: error });
      }
   }


   //rota para atualizar tarefa//
   async update(req, res) {
      await UsuarioModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
         new: true, //esse new true é para devolver a tarefa atualizada//
      })
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error); // para retornar o erro interno //
         });
   }
   //rota para buscar por id //

   async getById(req, res) {
      await UsuarioModel.find({
         _id: req.params.id
      }).populate('categoria_usuario')
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }

   async all(req, res) {
      await UsuarioModel.find()
         .sort("asc")
         .then((response) => {
            return res.status(200).json(response);
         })
         .catch((error) => {
            return res.status(500).json(error);
         });
   }
}

module.exports = new UsuarioController();
