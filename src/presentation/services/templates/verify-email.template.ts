import { emailBody } from "./email-body";

export const verifyEmailTemplate = (name: string, url: string) => {

    return emailBody(`
        <h2>Hola ${name}, 👋</h2>

        <p>
            Gracias por registrarte en <b>Fintra</b>.
        </p>

        <p>
            Para activar tu cuenta, por favor verifica tu correo.
        </p>

        <div style="text-align:center;margin:30px 0">
            <a href="${url}" style="
                background:#16a34a;
                color:white;
                padding:12px 20px;
                border-radius:8px;
                text-decoration:none;
                font-weight:bold;
                display:inline-block;
            ">
                Verificar cuenta
            </a>
        </div>

        <p style="font-size:12px;color:#666">
            Este enlace expirará en 24 horas por seguridad.
        </p>
    `);
};