import admin from "firebase-admin";
import { envs } from "./envs";

const rawServiceAccount = envs.FIREBASE_SERVICE_ACCOUNT.trim();
const normalizedServiceAccount = rawServiceAccount.replace(/\r?\n/g, "\\n");

const serviceAccount = JSON.parse(normalizedServiceAccount) as admin.ServiceAccount;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;