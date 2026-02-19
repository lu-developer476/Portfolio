import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

/**
 * Firebase Admin init (server-side only).
 * Use a Service Account in env vars, safe for Vercel Serverless/Edge? (This is serverless).
 * 
 * Required env vars (see README):
 * - FIREBASE_PROJECT_ID
 * - FIREBASE_CLIENT_EMAIL
 * - FIREBASE_PRIVATE_KEY  (replace \n correctly)
 */
export function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: required("FIREBASE_PROJECT_ID"),
        clientEmail: required("FIREBASE_CLIENT_EMAIL"),
        privateKey: required("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n")
      })
    });
  }

  return getFirestore();
}
