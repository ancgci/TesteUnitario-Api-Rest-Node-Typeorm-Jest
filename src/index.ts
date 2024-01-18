import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from "./database";

createConnection();
const server = express();

server.use(express.json())
server.use(router)

server.listen(5000, () => {
    console.log('Androide is running on port 5000 in address http://localhost:5000/')
})


// Criar um usuário
// Editar um usuário
// Selecionar um usuário
// Deletar um usuário
// = API REST FULL = CESD = CRUD
//  Recurso  /usuario
//GET  
//PUT OR PATCH
//UPDATE
//DELETE

