export const passwordChangedTemplate = (name: string) => {

    return `
    <div style="
        font-family:Arial,sans-serif;
        max-width:600px;
        margin:auto;
        padding:30px;
        border:1px solid #e5e7eb;
        border-radius:12px;
    ">

        <h2>
            Hola ${name}
        </h2>

        <p>
            Tu contraseña fue actualizada correctamente.
        </p>

        <p>
            Si realizaste este cambio no debes hacer nada más.
        </p>

        <p style="color:red">

            Si NO fuiste tú, cambia inmediatamente tu contraseña y comunícate con soporte.

        </p>

    </div>
    `;
}