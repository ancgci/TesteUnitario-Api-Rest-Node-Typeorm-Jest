import { CreateUserService } from '../src/service/CreateUserService';
import { v4 as uuid } from 'uuid';
class FakeData{
    createUserService = new CreateUserService();
    async execute(){

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Antonio Carlos Garcia Junior',
            email: 'contratado@agora.por.vc',
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Junior Carlos Garcia',
            email: '',
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Antonio Garcia Carlos',
            email: 'aprovado@agora.por.vc',
        })

        return user
    }
}

export {FakeData}