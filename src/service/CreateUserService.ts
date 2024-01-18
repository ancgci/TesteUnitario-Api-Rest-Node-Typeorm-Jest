import { getRepository } from "typeorm";
import { Usuario } from "../entities/Usuario";

interface IUsuario {
    id: string;
    nome: string;
    email?: string;
}

class CreateUserService {
    // salva as informações do BD
    async execute({ nome, email, id }: IUsuario) {
        const usuario = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id: id,
                    nome: nome,
                    email: email
                }
            ])
            .execute();

        // Aguarde a resolução da Promise antes de fazer o log
        console.log(usuario.identifiers[0]);

        return usuario.identifiers[0];
    }
}

export { CreateUserService };
