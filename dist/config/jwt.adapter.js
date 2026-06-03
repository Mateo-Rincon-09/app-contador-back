"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("./envs");
const JWT_TOKEN = envs_1.envs.SECRET_TOKEN;
class JwtAdapter {
    static generateToken(payload, duration = '2h') {
        return new Promise((resolve) => {
            jsonwebtoken_1.default.sign(payload, JWT_TOKEN, { expiresIn: duration }, (err, token) => {
                if (err || !token)
                    return resolve(null);
                resolve(token);
            });
        });
    }
    static validateToken(token) {
        return new Promise((resolve) => {
            jsonwebtoken_1.default.verify(token, JWT_TOKEN, (err, decoded) => {
                if (err)
                    return resolve(null);
                resolve(decoded);
            });
        });
    }
}
exports.JwtAdapter = JwtAdapter;
//# sourceMappingURL=jwt.adapter.js.map