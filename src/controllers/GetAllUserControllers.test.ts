import createConnection from '../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../../utils/mocks/mockRequest';
import { makeMockResponse} from '../../utils/mocks/mockResponse';
import { GetAllUserController } from "./GetAllUserControllers";
import { FakeData } from '../../utils/FakeData';

describe('GetAllUserController', () => {
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

    it('Retornar status 200 após recuperar todos os usuários', async () => {
        await fakedata.execute();
        const getAllUserController = new GetAllUserController();
        const request = makeMockRequest({});
        const response = makeMockResponse();

        await getAllUserController.handle(request, response);

        expect(response.state.status).toBe(200);

    })
})