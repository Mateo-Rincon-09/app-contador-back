export const resetPasswordTemplate = (name: string, url: string) => {

    return `
    <div style="
        font-family: Arial, sans-serif;
        max-width:600px;
        margin:auto;
        padding:30px;
        background:#ffffff;
        border-radius:12px;
        border:1px solid #e5e7eb;
    ">

        <h2 style="color:#2563eb">
            Hola ${name}
        </h2>

        <p>
            Hemos recibido una solicitud para restablecer tu contraseña.
        </p>

        <p>
            Si fuiste tú, presiona el siguiente botón:
        </p>

        <div style="margin:30px 0;text-align:center">

            <a
                href="${url}"
                style="
                    background:#2563eb;
                    color:white;
                    padding:14px 28px;
                    text-decoration:none;
                    border-radius:8px;
                    font-weight:bold;
                "
            >
                Restablecer contraseña
            </a>

        </div>

        <p>
            Este enlace expirará en 30 minutos.
        </p>

        <p>
            Si no solicitaste este cambio puedes ignorar este correo.
        </p>

    </div>
    `;
};