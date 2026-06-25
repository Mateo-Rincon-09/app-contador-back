export const verifyEmailTemplate = (
    name: string,
    verificationUrl: string
) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1>Verifica tu correo</h1>

            <p>Hola ${name},</p>

            <p>
                Gracias por registrarte en Fintra.
            </p>

            <p>
                Haz clic en el siguiente botón para verificar tu correo:
            </p>

            <a
                href="${verificationUrl}"
                style="
                    display:inline-block;
                    padding:12px 20px;
                    background:#2563eb;
                    color:white;
                    text-decoration:none;
                    border-radius:6px;
                "
            >
                Verificar correo
            </a>

            <p>
                Este enlace expirará en 24 horas.
            </p>
        </div>
    `;
};