"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
// Controles das rotas da aplicação:
const uploadControll_1 = __importDefault(require("../controllers/uploadControll"));
// Helpers:
const uploaderConfig_1 = require("../configs/uploaderConfig");
const senderControll_1 = __importDefault(require("../controllers/senderControll"));
routes.post("/upload", uploaderConfig_1.upload.single("file"), uploadControll_1.default);
routes.post("/send", senderControll_1.default);
exports.default = routes;
