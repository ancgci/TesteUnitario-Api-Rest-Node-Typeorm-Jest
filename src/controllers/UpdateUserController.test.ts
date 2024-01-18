import createConnection from '../database';
import { UpdateUserController } from './UpdateUserController';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse} from '../../utils/mocks/mockResponse';
import { FakeData } from '../../utils/FakeData';

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await (connection).runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakedata = new FakeData();

    it('Retornar status 204 após edição do usuario', async () => {
        
        const mockUser = await fakedata.createUser();

        const udateUserController = new UpdateUserController();
        
        const request = {
            body: {
                id: mockUser.id,
                nome: 'Nicolas Garcia',
                email: 'prudente@prudente.ok'
            }
        } as Request

        const response = makeMockResponse();

        await udateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
        
    })
})