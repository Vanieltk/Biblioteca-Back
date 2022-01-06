const express = require("express");
const cors = require("cors");
const server = express();
require("dotenv").config();
server.use(cors());
server.options("*", cors());
server.use(express.json());

const UsuarioRoutes = require("./routes/UsuarioRoutes");
server.use("/usuario", UsuarioRoutes);
server.use("/login", UsuarioRoutes);

const CategoriaUsuario = require("./routes/CategoriaUsuarioRoutes");
server.use("/CategoriaUsuario", CategoriaUsuario);

const ObraLiterariaRoutes = require("./routes/ObraLiterariaRoutes");
server.use("/ObraLiteraria", ObraLiterariaRoutes);

const CategoriaObraLiteraria = require("./routes/CategoriaObraLiterariaRoutes");
server.use("/CategoriaObraLiteraria", CategoriaObraLiteraria);

const Emprestimo = require("./routes/EmprestimoRoutes");
server.use("/Emprestimo", Emprestimo);

const ReservaObraLiteraria = require("./routes/ReservaObraLiterariaRoutes");
server.use("/Reserva", ReservaObraLiteraria);

server.listen(3000, () => {
   console.log("API ONLINE");
});
