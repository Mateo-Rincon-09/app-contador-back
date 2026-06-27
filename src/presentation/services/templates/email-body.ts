export const emailBody = (content: string) => {

    return `
    <div style="background:#f4f4f5;padding:40px 0;font-family:Arial">

        <div style="
            max-width:600px;
            margin:0 auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
        ">

            <!-- HEADER -->
            <div style="
                background:#16a34a;
                padding:20px;
                text-align:center;
                color:white;
                font-size:20px;
                font-weight:bold;
            ">
                FINTRA
            </div>

            <!-- CONTENT -->
            <div style="padding:30px;color:#333">
                ${content}
            </div>

            <!-- FOOTER -->
            <div style="
                padding:20px;
                font-size:12px;
                color:#888;
                text-align:center;
                border-top:1px solid #eee;
            ">
                © ${new Date().getFullYear()} Fintra — Controla tus finanzas de forma inteligente
            </div>

        </div>

    </div>
    `;
};