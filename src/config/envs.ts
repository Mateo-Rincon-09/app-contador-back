import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    SECRET_TOKEN: get('SECRET_TOKEN').required().asString(),
    DATABASE_URL: get('DATABASE_URL').required().asString(),
    FIREBASE_SERVICE_ACCOUNT: get('FIREBASE_SERVICE_ACCOUNT').required().asString(),

    MAIL_USER: get('MAIL_USER').required().asString(),
    MAIL_PASSWORD: get('MAIL_PASSWORD').required().asString(),

    FRONTEND_URL: get('FRONTEND_URL').required().asString(),
}