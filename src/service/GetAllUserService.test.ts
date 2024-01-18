import { getConnection } from "typeorm";
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from    '../../utils/FakeData';

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await (connection).runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData();


    it('Retornar todos os usuário cadastrados', async () => {

        await fakeData.execute()
        const expectedResponse = [
            {
                nome: 'Antonio Carlos Garcia Junior',
                email: 'contratado@agora.por.vc',
            },
            {
                nome: 'Junior Carlos Garcia',
                email: '',
            }
        ]

        


        const getAllUserService = new GetAllUserService();
        const result = await getAllUserService.execute();
        expect(result).toMatchObject(expectedResponse)
    })
})