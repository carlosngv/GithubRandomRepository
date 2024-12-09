import { signInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store"
import { checkingCredentials, login, logout } from "./authSlice"


export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        
        dispatch( checkingCredentials() );
        
        const result = await signInWithGoogle();

        console.log(result)
        if( !result.ok ) {
            dispatch( logout( result.errorMessage ) );
            return;
        }
        
        dispatch( login( result ) );
    }
}