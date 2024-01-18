import { Request, Response } from 'express';
import { UpdateUserService } from '../service/UdateUserService';
class UpdateUserController{
  async handle(request: Request, response: Response){
      const updateUserService = new UpdateUserService();
      const {id, nome, email} = request.body

      if(id.length === 0){
        return response.status(400).json({error: 'Id necessária'})
      }

      if(nome.length === 0){
        return response.status(400).json({error: 'Nome necessário'})
      }
      await updateUserService.execute({id, nome, email})

      return response.status(204).json()
  }
}
export {UpdateUserController}