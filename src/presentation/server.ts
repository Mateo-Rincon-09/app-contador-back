import express, { Router } from "express";
import cors from "cors";

interface Options {
    port: number;
    routes: Router;
}

export class Server {
    private readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        this.port = options.port;
        this.routes = options.routes;
    }

    async start() {

        this.app.use(express.json());
        this.app.use(cors({
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }))

        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });

    }

}

