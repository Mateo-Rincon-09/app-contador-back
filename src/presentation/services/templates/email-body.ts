export const emailBody = (content: string) => {
    return `
<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Fintra</title>
</head>

<body style="
    margin:0;
    padding:0;
    background:#f3f6fb;
    font-family:Arial,Helvetica,sans-serif;
">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:40px 20px;background:#f3f6fb;">

<tr>
<td align="center">

<table
width="620"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:22px;
overflow:hidden;
box-shadow:0 18px 50px rgba(15,23,42,.08);
">

<!-- HERO -->

<tr>
<td
style="
background:linear-gradient(135deg,#0f766e,#16a34a);
padding:50px 40px;
text-align:center;
">

<div
style="
display:inline-block;
width:70px;
height:70px;
line-height:70px;
border-radius:18px;
background:rgba(255,255,255,.18);
font-size:34px;
font-weight:bold;
color:white;
margin-bottom:18px;
">
F
</div>

<h1 style="
margin:0;
color:white;
font-size:32px;
font-weight:700;
letter-spacing:.5px;
">
Fintra
</h1>

<p style="
margin-top:14px;
color:rgba(255,255,255,.9);
font-size:16px;
line-height:26px;
">
Controla tus finanzas de forma inteligente.
</p>

</td>
</tr>

<!-- CONTENT -->

<tr>

<td style="padding:50px 45px;">

${content}

</td>

</tr>

<!-- DIVIDER -->

<tr>
<td style="padding:0 45px;">
<div style="
height:1px;
background:#edf2f7;
"></div>
</td>
</tr>

<!-- FOOTER -->

<tr>

<td
style="
padding:35px 40px;
text-align:center;
">

<p style="
margin:0;
color:#475569;
font-size:14px;
line-height:24px;
font-weight:600;
">
Gracias por confiar en Fintra.
</p>

<p style="
margin-top:10px;
font-size:13px;
color:#94a3b8;
line-height:22px;
">
Este es un correo automático. Si no reconoces esta actividad, puedes ignorarlo de forma segura.
</p>

<p style="
margin-top:24px;
font-size:12px;
color:#94a3b8;
">
© ${new Date().getFullYear()} Fintra. Todos los derechos reservados.
</p>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>

</html>
`;
};