"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    app = (0, express_1.default)();
    port;
    routes;
    constructor(options) {
        this.port = options.port;
        this.routes = options.routes;
    }
    async start() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }));
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map