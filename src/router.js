const express = require("express");
const { getUsers, registerUser, deleteUser, update, getUser, five } = require("./controllers/users");
const verify = require("./intermediaries");


const rotas = express();
rotas.get("/users", getUsers );
rotas.get("/user",  getUser);
rotas.get("/sum",  five);
rotas.post("/user", registerUser );

rotas.use(verify)
rotas.delete("/user/:id", deleteUser );
rotas.put("/user/:id",  update );



module.exports = rotas;