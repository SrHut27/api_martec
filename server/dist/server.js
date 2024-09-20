"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const filesDirectory_1 = __importDefault(require("./handlers/filesDirectory"));
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
(0, filesDirectory_1.default)();
app.use(routes_1.default);
app.use((error, req, res, next) => {
    console.error(error.stack);
    return res.status(500).json("Não foi possível contatar o terminal no momento. Tente novamente mais tarde.");
});
app.listen(PORT, () => console.log("Server is running."));
