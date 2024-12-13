// ? Doc guía: https://firebase.google.com/docs/auth/web/google-signin#web

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, email, uid } = result.user;
        GoogleAuthProvider.credentialFromResult(result);

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

export const signInWithEmail = async ( userEmail: string, password: string ) => {
    try {
        const result = await signInWithEmailAndPassword( FirebaseAuth, userEmail, password );
        console.log( result );
        const { displayName, email, uid } = result.user;

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

export const registerWithEmailAndPassword = async ( userEmail: string, password: string ) => {
    
    try {
        
        const result = await createUserWithEmailAndPassword( FirebaseAuth, userEmail, password );
        const { displayName, email, uid } = result.user;

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