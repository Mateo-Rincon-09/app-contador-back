import { emailBody } from "./email-body";

export const verifyEmailTemplate = (name: string, url: string) => {

    return emailBody(`

        <div style="text-align:center">

            <div style="
                width:70px;
                height:70px;
                margin:0 auto 25px;
                border-radius:50%;
                background:#dcfce7;
                line-height:70px;
                font-size:34px;
            ">
                🚀
            </div>


            <h2 style="
                margin:0;
                color:#0f172a;
                font-size:28px;
                font-weight:700;
            ">
                ¡Bienvenido a Fintra!
            </h2>


            <p style="
                margin-top:20px;
                color:#475569;
                font-size:16px;
                line-height:26px;
            ">
                Hola <strong>${name}</strong> 👋
            </p>


            <p style="
                color:#475569;
                font-size:16px;
                line-height:26px;
            ">
                Gracias por crear tu cuenta.
                Estás a un paso de comenzar a administrar
                tus finanzas de forma inteligente.
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
                Para activar tu cuenta y acceder a todas las
                funcionalidades de Fintra, verifica tu dirección
                de correo electrónico.
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
                padding:16px 36px;
                border-radius:12px;
                text-decoration:none;
                font-size:15px;
                font-weight:700;
                display:inline-block;
                box-shadow:0 8px 20px rgba(22,163,74,.25);
            "
            >
                Verificar mi cuenta
            </a>

        </div>



        <div style="
            margin:30px 0;
            padding:20px;
            border-radius:16px;
            background:#ecfdf5;
            border:1px solid #bbf7d0;
        ">

            <p style="
                margin:0;
                color:#166534;
                font-size:14px;
                line-height:24px;
            ">
                🔒 Tu seguridad es importante.
                Nunca compartas tus enlaces de acceso
                ni códigos de verificación con nadie.
            </p>

        </div>



        <p style="
            text-align:center;
            color:#64748b;
            font-size:13px;
            line-height:22px;
        ">
            Este enlace expirará en <strong>24 horas</strong>.
            Si no creaste una cuenta en Fintra,
            puedes ignorar este mensaje.
        </p>

    `);
};