import { emailBody } from "./email-body";

export const welcomeEmailTemplate = (name: string) => {

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
                🎉
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
                Tu cuenta está lista.
                Ahora tienes una nueva forma de organizar,
                entender y mejorar tus finanzas.
            </p>

        </div>



        <div style="
            margin:40px 0 25px;
        ">

            <h3 style="
                color:#0f172a;
                font-size:18px;
                text-align:center;
                margin-bottom:25px;
            ">
                Con Fintra puedes:
            </h3>


            <table width="100%" cellspacing="0" cellpadding="0">

                <tr>
                    <td style="padding:8px 0">

                        <div style="
                            padding:18px;
                            border-radius:14px;
                            background:#f8fafc;
                            border:1px solid #e2e8f0;
                        ">
                            <strong style="color:#0f172a">
                                📊 Organizar tus movimientos
                            </strong>

                            <p style="
                                margin:8px 0 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Registra ingresos y gastos fácilmente.
                            </p>

                        </div>

                    </td>
                </tr>



                <tr>
                    <td style="padding:8px 0">

                        <div style="
                            padding:18px;
                            border-radius:14px;
                            background:#f8fafc;
                            border:1px solid #e2e8f0;
                        ">
                            <strong style="color:#0f172a">
                                💰 Alcanzar tus objetivos
                            </strong>

                            <p style="
                                margin:8px 0 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Crea metas de ahorro y sigue tu progreso.
                            </p>

                        </div>

                    </td>
                </tr>



                <tr>
                    <td style="padding:8px 0">

                        <div style="
                            padding:18px;
                            border-radius:14px;
                            background:#f8fafc;
                            border:1px solid #e2e8f0;
                        ">
                            <strong style="color:#0f172a">
                                📈 Entender tus finanzas
                            </strong>

                            <p style="
                                margin:8px 0 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Visualiza estadísticas y toma mejores decisiones.
                            </p>

                        </div>

                    </td>
                </tr>


            </table>

        </div>




        <div style="
            margin:40px 0;
            text-align:center;
        ">

            <a 
            href="${process.env.FRONTEND_URL}"
            style="
                background:linear-gradient(135deg,#16a34a,#0f766e);
                color:white;
                padding:16px 40px;
                border-radius:12px;
                text-decoration:none;
                font-size:15px;
                font-weight:700;
                display:inline-block;
                box-shadow:0 8px 20px rgba(22,163,74,.25);
            "
            >
                Comenzar en Fintra
            </a>

        </div>

        
        <div style="
            padding:22px;
            border-radius:16px;
            background:#ecfdf5;
            border:1px solid #bbf7d0;
            text-align:center;
        ">

            <p style="
                margin:0;
                color:#166534;
                font-size:14px;
                line-height:24px;
            ">
                🚀 Empieza hoy a construir mejores hábitos financieros.
            </p>

        </div>

    `);
};