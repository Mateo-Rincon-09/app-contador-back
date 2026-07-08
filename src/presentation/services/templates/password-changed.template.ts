import { emailBody } from "./email-body";

export const passwordChangedTemplate = (name: string) => {

    return emailBody(`

        <div style="text-align:center">

            <div style="
                width:70px;
                height:70px;
                margin:0 auto 25px;
                border-radius:50%;
                background:#dcfce7;
                line-height:70px;
                font-size:32px;
            ">
                ✓
            </div>

            <h2 style="
                margin:0;
                color:#0f172a;
                font-size:26px;
                font-weight:700;
            ">
                Contraseña actualizada
            </h2>

            <p style="
                margin-top:20px;
                color:#475569;
                font-size:16px;
                line-height:26px;
            ">
                Hola <strong>${name}</strong>, tu contraseña de Fintra
                fue cambiada correctamente.
            </p>

        </div>


        <div style="
            margin:35px 0;
            padding:22px;
            border-radius:16px;
            background:#f8fafc;
            border:1px solid #e2e8f0;
        ">

            <p style="
                margin:0;
                color:#334155;
                font-size:14px;
                line-height:24px;
            ">
                🔒 Por seguridad, recuerda que nunca debes compartir
                tu contraseña con otras personas.
            </p>

        </div>


        <div style="
            margin:35px 0;
            padding:22px;
            border-radius:16px;
            background:#fff7ed;
            border:1px solid #fed7aa;
        ">

            <p style="
                margin:0;
                color:#9a3412;
                font-size:14px;
                line-height:24px;
            ">
                ⚠️ Si tú no realizaste este cambio, protege tu cuenta
                inmediatamente y contacta al equipo de soporte.
            </p>

        </div>


        <div style="text-align:center;margin:40px 0">

            <a 
            href="${process.env.FRONTEND_URL}"
            style="
                background:linear-gradient(135deg,#16a34a,#0f766e);
                color:white;
                padding:15px 32px;
                border-radius:12px;
                text-decoration:none;
                font-size:15px;
                font-weight:700;
                display:inline-block;
                box-shadow:0 8px 20px rgba(22,163,74,.25);
            "
            >
                Acceder a Fintra
            </a>

        </div>


        <p style="
            text-align:center;
            color:#94a3b8;
            font-size:13px;
            line-height:22px;
        ">
            Si todo está correcto, puedes ignorar este mensaje.
        </p>

    `);

};