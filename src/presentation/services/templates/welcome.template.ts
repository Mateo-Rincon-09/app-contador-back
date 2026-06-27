import { emailBody } from "./email-body";

export const welcomeEmailTemplate = (name: string) => {

    return emailBody(`
        <h2>¡Bienvenido a Fintra, ${name}! 🚀</h2>

        <p>
            Tu cuenta ya está activa.
        </p>

        <p>Ahora puedes:</p>

        <ul>
            <li>📊 Registrar ingresos y gastos</li>
            <li>💰 Crear metas de ahorro</li>
            <li>📈 Ver estadísticas financieras</li>
            <li>🎯 Controlar tu progreso</li>
        </ul>

        <div style="text-align:center;margin:30px 0">
            <a href="${process.env.FRONTEND_URL}" style="
                background:#16a34a;
                color:white;
                padding:12px 20px;
                border-radius:8px;
                text-decoration:none;
                font-weight:bold;
                display:inline-block;
            ">
                Ir a Fintra
            </a>
        </div>
    `);
};