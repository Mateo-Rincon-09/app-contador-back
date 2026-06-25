import { envs } from "./config/envs";
import { verifyMailer } from "./config/mailer";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

(async () => {
    try {
        await main();
    } catch (error) {
        console.error(error);
    }
})();


async function main() {

    await verifyMailer();

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    await server.start();
}