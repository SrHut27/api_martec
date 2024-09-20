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
exports.default = sendFileContoll;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HttpErrors_1 = require("../errors/HttpErrors");
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
function sendFileContoll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { number, token, filepath } = req.method === "GET" ? req.query : req.body;
        if (!token || !filepath) {
            const err = new HttpErrors_1.BadRequest("Campo 'token' e 'filepath' obrigatórios!");
            return res.status(err.status).json(err.message);
        }
        try {
            const form = new form_data_1.default();
            form.append('number', number);
            form.append('medias', fs_1.default.createReadStream(filepath));
            yield axios_1.default.post(`${process.env.ENDPOINT}`, form, {
                headers: Object.assign({ Authorization: `Bearer ${token}` }, form.getHeaders()),
            });
        }
        catch (error) {
            console.log(error);
            if (!res.headersSent) {
                const err = new HttpErrors_1.ServerError("Não foi possível enviar sua mensagem. Tente novamente mais tarde.");
                return res.status(err.status).json(err);
            }
        }
    });
}
