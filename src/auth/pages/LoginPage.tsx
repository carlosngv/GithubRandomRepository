import { NavLink } from "react-router";
import { useForm } from "../../shared/hooks/useForm"
import { SyntheticEvent, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startEmailSignIn, startGoogleSignIn } from "../../store/auth/thunks";

import Swal from 'sweetalert2';
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";


export const LoginPage = (  ) => {

    const { authStatus, errorMessage } = useAppSelector( state => state.auth );

    const useDispatch = useAppDispatch();
    
    useEffect(() => {

        if( errorMessage ) {
            Swal.fire({
                title: 'Invalid Credentials!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
      
    }, [ errorMessage ])
    

    const { formState, onResetForm, onValueChange } = useForm<{ email: string, password: string }>({
        email: '',
        password: '',
    });

    const isAuthenticating = useMemo(() => authStatus === 'validating', [ authStatus ]);

    const onEmailSignIn = ( e: SyntheticEvent ) => {
        e.preventDefault();
        useDispatch( startEmailSignIn( formState.email, formState.password ) );
        onResetForm();
    }

    const onGoogleSignIn = ( e: SyntheticEvent ) => {
        e.preventDefault();
        useDispatch( startGoogleSignIn() )
        onResetForm();
    }



    return (
       <div className="login-card">
            <header>
                <h1 className="text-4xl font-extrabold text-gray-700">Welcome,</h1>
                <h3 className="text-2xl text-gray-500">Sign in to continue</h3>
            </header>
            <form>
                <div className="form-container">
                    <div className="form-control">
                        <label className="form-label">Email</label>
                        <input className="form-input" value={ formState.email } name="email" onChange={ onValueChange } type="email" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="form-control">
                        <label className="form-label">Password</label>
                        <input className="form-input" value={ formState.password } name="password"  onChange={ onValueChange } type="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <div className="form-buttons">
                        <button className="form-btn" onClick={ onEmailSignIn } disabled={ isAuthenticating }>Sign in</button>
                        <button className="form-btn" onClick={ onGoogleSignIn } disabled={ isAuthenticating }> <i className="fa-brands fa-google"></i> Google</button>
                    </div>
                </div>
            </form>
            <footer className="form-footer">
                <span className="text-lg font-medium">Don't have an account?</span> <NavLink to="/auth/register">Sign up</NavLink> 
            </footer>
       </div>
    )
}
