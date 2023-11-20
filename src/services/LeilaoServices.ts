import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoService{
    constructor(){}

    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newLeilao = await prisma.leilao.create({
                data: leilao
            });
            return newLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findLeilao(id: string | undefined){
        try{
            if(id){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        id
                    }
                })
                return leilao;
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeiloes(id: string, newData: Prisma.LeilaoCreateInput){
        try{
            const LeilaoUpdated = await prisma.leilao.update({
                where: {
                    id
                }, data: {
                    produto: newData.produto,
                    preco: newData.preco,
                    datalimite: newData.datalimite,
                    dono: newData.dono,
                    listaDeLances: newData.listaDeLances,
                }
            });
            return LeilaoUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(id: string){
        try{
            if(!id){
                return console.log("Um id é necessário para deletar um usuário");
            }
            await prisma.leilao.delete({where: {id}});
            return "ok";
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();