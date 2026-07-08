import { emailBody } from "./email-body";

export const resetPasswordTemplate = (name: string, url: string) => {

    return emailBody(`

        <div style="text-align:center">

            <div style="
                width:70px;
                height:70px;
                margin:0 auto 25px;
                border-radius:50%;
                background:#fee2e2;
                line-height:70px;
                font-size:32px;
            ">
                🔑
            </div>


            <h2 style="
                margin:0;
                color:#0f172a;
                font-size:26px;
                font-weight:700;
            ">
                Restablece tu contraseña
            </h2>


            <p style="
                margin-top:20px;
                color:#475569;
                font-size:16px;
                line-height:26px;
            ">
                Hola <strong>${name}</strong>, recibimos una solicitud
                para cambiar la contraseña de tu cuenta Fintra.
            </p>

        </div>



        <div style="
            margin:35px 0;
            padding:24px;
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
                Para crear una nueva contraseña segura, haz clic en el
                siguiente botón. Este enlace solo estará disponible
                durante un tiempo limitado.
            </p>

        </div>



        <div style="
            text-align:center;
            margin:40px 0;
        ">

            <a 
            href="${url}"
            style="
                background:linear-gradient(135deg,#16a34a,#0f766e);
                color:white;
                padding:16px 34px;
                border-radius:12px;
                text-decoration:none;
                font-size:15px;
                font-weight:700;
                display:inline-block;
                box-shadow:0 8px 20px rgba(22,163,74,.25);
            "
            >
                Crear nueva contraseña
            </a>

        </div>



        <div style="
            margin:30px 0;
            padding:20px;
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
                ⏱️ Este enlace expirará en <strong>30 minutos</strong>
                por motivos de seguridad.
            </p>

        </div>



        <p style="
            text-align:center;
            color:#64748b;
            font-size:13px;
            line-height:22px;
        ">
            ¿No solicitaste este cambio?
            Puedes ignorar este correo. Tu contraseña permanecerá segura.
        </p>

    `);
};