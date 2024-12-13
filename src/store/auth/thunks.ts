import { registerWithEmailAndPassword, signInWithEmail, signInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store"
import { checkingCredentials, login, logout, setErrorMessage } from "./authSlice"


export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        
        dispatch( checkingCredentials() );
        
        const result = await signInWithGoogle();

        console.log(result)
        if( !result.ok ) {
            dispatch( setErrorMessage( 'Invalid credentials. Please, check your email or password.' ) );
            setTimeout( () => {
                dispatch( logout( ) );
            }, 1000);
            return;
        }
        
        dispatch( login( result ) );
    }
}

export const startEmailSignIn = ( email: string, password: string ) => {
    return async ( dispatch: AppDispatch ) => {

        dispatch( checkingCredentials() );
        const result = await signInWithEmail( email, password );
        console.log( result );
        
        if( !result.ok ){
            dispatch( setErrorMessage( 'Invalid credentials. Please, check your email or password.' ) );
            setTimeout( () => {
                dispatch( logout( ) );
            }, 1000);
            return;
        }

        dispatch( login( result ) );

    }
}

export const startEmailSignUp = ( email: string, password: string ) => {
    return async ( dispatch: AppDispatch ) => {

        dispatch( checkingCredentials() );
        const result = await registerWithEmailAndPassword( email, password );
        console.log( result );
        
        if( !result.ok ){
            dispatch( setErrorMessage( 'There was a problem creating your user. Try again.' ) );
            setTimeout( () => {
                dispatch( logout( ) );
            }, 1000);
            return;
        }

        dispatch( login( result ) );

    }
}