// ? Doc guía: https://firebase.google.com/docs/auth/web/google-signin#web

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, email, uid } = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);

        return {
            ok: true,
            displayName,
            email,
            uid,
        }

    } catch (error) {

        const { code, message } = <{ code: string; message: string }>error;
        console.log({ error });
        return {
            ok: false,
            code,
            errorMessage: message,
        }
    }
}