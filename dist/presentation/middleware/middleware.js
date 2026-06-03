"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../../config/envs");
const middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json({ error: 'No token proveido' });
    }
    const token = authHeader.split(" ")[1]?.replace(/"/g, "");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, envs_1.envs.SECRET_TOKEN);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Token invalido' });
    }
};
exports.middleware = middleware;
//# sourceMappingURL=middleware.js.map