import { emailBody } from "./email-body";

export const resetPasswordTemplate = (name: string, url: string) => {

    return emailBody(`
        <h2>Hola ${name}</h2>

        <p>
            Recibimos una solicitud para restablecer tu contraseña.
        </p>

        <div style="text-align:center;margin:30px 0">
            <a href="${url}" style="
                background:#dc2626;
                color:white;
                padding:12px 20px;
                border-radius:8px;
                text-decoration:none;
                font-weight:bold;
                display:inline-block;
            ">
                Restablecer contraseña
            </a>
        </div>

        <p style="font-size:12px;color:#666">
            Este enlace expirará en 30 minutos.
        </p>

        <p style="font-size:12px;color:#666">
            Si no fuiste tú, puedes ignorar este correo.
        </p>
    `);
};