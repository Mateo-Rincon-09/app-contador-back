import { emailBody } from "./email-body";

export const passwordChangedTemplate = (name: string) => {

    return emailBody(`
        <h2>Hola ${name}</h2>

        <p>
            Tu contraseña fue cambiada correctamente.
        </p>

        <p style="color:#666;font-size:13px">
            Si no fuiste tú, contacta soporte inmediatamente.
        </p>

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