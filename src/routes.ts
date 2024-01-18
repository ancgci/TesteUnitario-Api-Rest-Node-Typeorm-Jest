import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';  
import { GetAllUserController } from './controllers/GetAllUserControllers';  
import { UpdateUserController } from './controllers/UpdateUserController';  
import { DeleteUserController } from './controllers/DeleteUserController';


const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
router.get("/", (request: Request, response: Response) =>{
    // todas as funcionalidades
    return response.json({mensagem: "API DIO QA funcionando!"});
})

router.post("/usuarios", createUserController.handle);
router.get("/usuarios", getAllUserController.handle);
router.patch("/usuario", updateUserController.handle);
router.delete("/usuario/:id", deleteUserController.handle);

export { router }
