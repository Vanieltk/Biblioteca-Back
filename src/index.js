const express = require("express");
const server = express();
server.use(express.json());

const UsuarioRoutes = require("./routes/UsuarioRoutes");
server.use("/usuario", UsuarioRoutes);

const FuncionarioRoutes = require("./routes/FuncionarioRoutes");
server.use("/funcionario", FuncionarioRoutes);

const LivroRoutes = require("./routes/LivroRoutes");
server.use("/livro", LivroRoutes);

const CategoriaObrasLiterarias = require("./routes/CategoriaObrasLiterariasRoutes");
server.use("/categoriaobrasliterarias", CategoriaObrasLiterarias);

server.listen(3000, () => {
   console.log("API ONLINE");
});
