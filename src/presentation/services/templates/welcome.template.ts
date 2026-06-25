export const welcomeEmailTemplate = (name: string) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">

            <h1 style="color:#2563eb;">
                ¡Bienvenido a Fintra!
            </h1>

            <p>
                Hola <strong>${name}</strong>,
            </p>

            <p>
                Tu correo ha sido verificado correctamente.
            </p>

            <p>
                Ya puedes iniciar sesión y comenzar a administrar
                tus finanzas.
            </p>

            <hr>

            <p style="color:#666;">
                Gracias por confiar en Fintra.
            </p>

        </div>
    `;
};