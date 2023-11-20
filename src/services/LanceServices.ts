import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceService{
    constructor(){}

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newLance = await prisma.lance.create({
                data: lance
            });
            return newLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findLance(id: string | undefined){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                })
                return lance;
            }else{
                const lances = await prisma.lance.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLances(id: string, newData: Prisma.LanceCreateInput){
        try{
            const LanceUpdated = await prisma.lance.update({
                where: {
                    id
                }, data: {
                    comprador: newData.comprador,
                    leilao: newData.leilao,
                    valor: newData.valor,
                }
            });
            return LanceUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            if(!id){
                return console.log("Um id é necessário para deletar um usuário");
            }
            await prisma.lance.delete({where: {id}});
            return "ok";
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();