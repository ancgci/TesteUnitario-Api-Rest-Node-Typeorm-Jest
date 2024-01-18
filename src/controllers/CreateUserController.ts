import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {
  async handle (request: Request, response: Response) {
    const createUserService = new CreateUserService();
    const nome = request.body.nome;
    const email = request.body.email;
    const id = uuid();
    if (nome.length === 0) {
      return response.status(400).json({ message: "Nome obrigatorio" });
    }
    // Aguarde a resolução da Promise retornada por execute
    const user = await createUserService.execute({ id, nome, email });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
