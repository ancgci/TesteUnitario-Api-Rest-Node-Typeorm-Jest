// CreateUserController.test.ts
import { getConnection } from "typeorm";
import createConnection from '../database';
import { CreateUserController } from "./CreateUserController";
import { Request } from "express";
import { makeMockResponse } from "../../utils/mocks/mockResponse";

describe('CreateUserController', () => {
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
       const connection = getConnection()
       await connection.query('DELETE FROM usuarios')
       await connection.close()
    })

    const createUserController = new CreateUserController();
    const response = makeMockResponse();
    it('Deve Retornar o ID do user criado', async () => {
        const request = {
            body: {
                nome: 'Usuario qualquer',
                email: 'mail@mail.com'
            }
        } as Request;

        

        // Aguarde a resolução da Promise antes de chamar o controlador
        await createUserController.handle(request, response);

        

        // Verifique a propriedade 'status'
        expect(response.state.status).toBe(201);
    });

    it('Retornar 400 quando o nome não for informado',async () => {
        const request = {
            body: {
                nome: '',
                email: 'mail@mail.com'
            }
        } as Request;

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400)
        
    })

    it('Retornar 201 quando o email não foi informado',async () => {
        const request = {
            body: {
                nome: 'Usuario qualquer',
                email: ''
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    })

   
});

// nota: instânciar o objeto dentro do arquivo teste
// importar o controller
// simular a request e responsa com mock
