import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioService{
    constructor(){}


    async listUsuarios(id?: string){
        try{
            if(id){
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return usuario;
            }else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const newUsuario = await prisma.usuario.create({
                data: usuario
            });
            return newUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findUsuario(id: string | undefined){
        try{
            if(id){
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                })
                return usuario;
            }else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUsuarios(id: string, newData: Prisma.UsuarioCreateInput){
        try{
            const UsuarioUpdated = await prisma.usuario.update({
                where: {
                    id
                }, data: {
                    name: newData.name,
                    email: newData.email,
                }
            });
            return UsuarioUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUsuario(id: string){
        try{
            if(!id){
                return console.log("Um id é necessário para deletar um usuário");
            }
            await prisma.usuario.delete({where: {id}});
            return "ok";
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UsuarioService();