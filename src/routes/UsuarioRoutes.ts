import UsuarioController from "../controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/usuarios', UsuarioController.listUsuarios)

UsuarioRouter.post('/usuario', UsuarioController.createUsuario);

UsuarioRouter.put('/usuario', UsuarioController.updateUsuario);

UsuarioRouter.delete('/usuario', UsuarioController.deleteUsuario);

export default UsuarioRouter;