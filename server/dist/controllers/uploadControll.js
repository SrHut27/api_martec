"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uploadFileControll;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HttpErrors_1 = require("../errors/HttpErrors");
const filesDirectory_1 = require("../handlers/filesDirectory");
const path_1 = __importDefault(require("path"));
function uploadFileControll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = req.file;
        if (!file) {
            const err = new HttpErrors_1.BadRequest("Campo 'file' obrigatório!");
            return res.status(err.status).json(err.message);
        }
        const fileUrl = path_1.default.join(filesDirectory_1.dataDir, file.filename);
        if (fileUrl === undefined) {
            throw new Error("Defina qual o SERVER_URL da aplicação.");
        }
        try {
            return res.status(201).json({
                message: "Arquivo salvo com sucesso!",
                url: fileUrl,
            });
        }
        catch (error) {
            console.log(error);
            if (!res.headersSent) {
                const err = new HttpErrors_1.ServerError("Não foi possível enviar o seu arquivo. Tente novamente mais tarde.");
                return res.status(err.status).json(err);
            }
        }
    });
}
