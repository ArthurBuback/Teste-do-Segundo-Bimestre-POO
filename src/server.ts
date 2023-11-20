import express from 'express';
import MainRouter from './routes/MainRoutes';
import UsuarioRouter from './routes/UsuarioRoutes';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UsuarioRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})