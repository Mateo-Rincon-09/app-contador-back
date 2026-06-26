import { mailer } from '../../../config/mailer';
import { envs } from '../../../config/envs';
import { verifyEmailTemplate } from '../templates/verify-email.template';
import { welcomeEmailTemplate } from '../templates/welcome.template';
import { resetPasswordTemplate } from '../templates/reset-password.template';
import { passwordChangedTemplate } from '../templates/password-changed.template';

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
}

export class EmailService {

    async sendEmail(options: SendEmailOptions): Promise<boolean> {

        const { to, subject, html } = options;

        try {

            await mailer.sendMail({
                from: `"Fintra" <${envs.MAIL_USER}>`,
                to,
                subject,
                html,
            });

            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async sendVerificationEmail(email: string, name: string, token: string): Promise<boolean> {

        const verificationUrl = `${envs.FRONTEND_URL}/verify-email?token=${token}`;

        return this.sendEmail({
            to: email,
            subject: 'Verifica tu correo',
            html: verifyEmailTemplate(
                name,
                verificationUrl
            )
        });
    }

    async sendWelcomeEmail(email: string, name: string): Promise<boolean> {

        return this.sendEmail({
            to: email,
            subject: '¡Bienvenido a Fintra!',
            html: welcomeEmailTemplate(name)
        });

    }

    async sendResetPasswordEmail(email: string, name: string, token: string) {

        const url = `${envs.FRONTEND_URL}/reset-password?token=${token}`;

        return this.sendEmail({
            to: email,
            subject: "Restablecer contraseña",
            html: resetPasswordTemplate(
                name,
                url
            )
        });

    }

    async sendPasswordChangedEmail(email: string, name: string) {

        return this.sendEmail({
            to: email,
            subject: "Contraseña actualizada",
            html: passwordChangedTemplate(name)
        });

    }
}