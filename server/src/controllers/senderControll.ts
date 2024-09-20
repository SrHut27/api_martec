import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { BadRequest, ServerError } from "../errors/HttpErrors";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

export default async function sendFileContoll(req: Request, res: Response): Promise<Response | undefined> {
    const { number, token, filepath } = req.method === "GET" ? req.query : req.body;

        if (!token || !filepath) {
            const err = new BadRequest("Campo 'token' e 'filepath' obrigatórios!");
            return res.status(err.status).json(err.message);
        }

        try {
            const form = new FormData();
            form.append('number', number);
            form.append('medias', fs.createReadStream(filepath));
        
            await axios.post(`${process.env.ENDPOINT}`, form, {
              headers: {
                Authorization: `Bearer ${token}`,
                ...form.getHeaders(),
              },
            });
            return res.status(200).json("Mensagem enviada com sucesso!");
        } catch (error) {
            console.log(error);
            if (!res.headersSent) {
                const err = new ServerError("Não foi possível enviar sua mensagem. Tente novamente mais tarde.")
                return res.status(err.status).json(err);
            }
        }
}