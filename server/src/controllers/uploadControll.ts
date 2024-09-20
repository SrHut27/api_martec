import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { BadRequest, ServerError } from "../errors/HttpErrors";
import { dataDir } from "../handlers/filesDirectory";
import path from "path";

export default async function uploadFileControll(req: Request, res: Response): Promise<Response | undefined> {
    const file = req.file;

        if (!file) {
            const err = new BadRequest("Campo 'file' obrigatório!");
            return res.status(err.status).json(err.message);
        }

        const fileUrl: string | undefined =  path.join(dataDir, file.filename);
        if (fileUrl === undefined) {
            throw new Error("Defina qual o SERVER_URL da aplicação.");
        }

        try {
            return res.status(201).json({
                message: "Arquivo salvo com sucesso!",
                url: fileUrl,
            })
        } catch (error) {
            console.log(error);
                if (!res.headersSent) {
                    const err = new ServerError("Não foi possível enviar o seu arquivo. Tente novamente mais tarde.")
                    return res.status(err.status).json(err);
                }
        }
}