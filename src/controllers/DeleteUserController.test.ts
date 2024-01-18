import createConnection from '../database';
import { getConnection } from 'typeorm';
import { makeMockResponse} from '../../utils/mocks/mockResponse';
import { makeMockRequest } from '../../utils/mocks/mockRequest';
import { DeleteUserController } from './DeleteUserController';
import { FakeData } from '../../utils/FakeData';


describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await (connection).runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.close()
    })

    const fakedata = new FakeData();

    it('Retornar status 204',async () => {
        const mockUser = await fakedata.createUser();
        const deleteUserController = new DeleteUserController();
        const request = makeMockRequest({params: {id: mockUser.id}});
        const response = makeMockResponse();
        await deleteUserController.handle(request, response)
        expect(response.state.status).toBe(204)
    })

})