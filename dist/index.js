"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const router_1 = __importDefault(require("./routes/router"));
const server = new server_1.default();
server.middleware();
server.app.use('/', router_1.default);
server.start(() => { console.log(`Server running in the port ${server.port}`); });
