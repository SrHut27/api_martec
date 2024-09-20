"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataDir = void 0;
exports.default = createDataDir;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.dataDir = path_1.default.join(__dirname, "../data");
function createDataDir() {
    if (!fs_1.default.existsSync(exports.dataDir)) {
        fs_1.default.mkdirSync(exports.dataDir);
    }
}
