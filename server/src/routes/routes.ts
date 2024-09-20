import { Router } from "express";
const routes = Router();

// Controles das rotas da aplicação:
import uploadFileControll from "../controllers/uploadControll";


// Helpers:
import { upload } from "../configs/uploaderConfig";
import sendFileContoll from "../controllers/senderControll";

routes.post("/upload", upload.single("file"), uploadFileControll);
routes.post("/send", sendFileContoll);


export default routes;