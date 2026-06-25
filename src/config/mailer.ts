import nodemailer from 'nodemailer';
import { envs } from './envs';

export const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envs.MAIL_USER,
        pass: envs.MAIL_PASSWORD,
    },
});

export const verifyMailer = async () => {
    try {

        await mailer.verify();

        console.log('Gmail conectado correctamente');

    } catch (error) {

        console.error('Error conectando Gmail');
        console.error(error);

        process.exit(1);
    }
};