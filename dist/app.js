"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const server_1 = require("./presentation/server");
const routes_1 = require("./presentation/routes");
(async () => {
    try {
        await main();
    }
    catch (error) {
        console.error(error);
    }
})();
async function main() {
    const server = new server_1.Server({
        port: envs_1.envs.PORT,
        routes: routes_1.AppRoutes.routes,
    });
    await server.start();
}
//# sourceMappingURL=app.js.map