import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newusuario = await UsuarioService.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newusuario: newusuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const usuarios = UsuarioService.listUsuarios();

        res.status(200).json({
            status: 'ok',
            usuarios: usuarios
        })
    }

    async updateUsuario(req: Request, res: Response){
        res.send('Update usuario');
    }

    async findUsuario(req: Request, res: Response){
        res.send('Find usuario');
    }

    async deleteUsuario(req: Request, res: Response){
        res.send('Delete usuario');
    }
}

export default new UsuarioController;