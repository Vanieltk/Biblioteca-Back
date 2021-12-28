const express = require("express");
const server = express();
server.use(express.json());

const UsuarioRoutes = require("./routes/UsuarioRoutes");
server.use("/usuario", UsuarioRoutes);

const LivroRoutes = require("./routes/LivroRoutes");
server.use("/livro", LivroRoutes);

const CategoriaObrasLiterarias = require("./routes/CategoriaObrasLiterariasRoutes");
server.use("/categoriaobrasliterarias", CategoriaObrasLiterarias);

const Emprestimo = require("./routes/EmprestimoRoutes");
server.use("/emprestimo", Emprestimo);

const ReservaSites = require("./routes/ReservaSitesRoutes");
server.use("/reserva", ReservaSites);

server.listen(3000, () => {
   console.log("API ONLINE");
});
