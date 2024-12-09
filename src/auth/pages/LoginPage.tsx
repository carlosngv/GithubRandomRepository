import { NavLink } from "react-router";
import { useForm } from "../../shared/hooks/useForm"
import { SyntheticEvent, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startGoogleSignIn } from "../../store/auth/thunks";


export const LoginPage = (  ) => {

    const { authStatus } = useAppSelector( state => state.auth );

    const useDispatch = useAppDispatch();

    const { formState, onResetForm, onValueChange } = useForm<{ email: string, password: string }>({
        email: '',
        password: '',
    });

    const isAuthenticating = useMemo(() => authStatus === 'validating', [ authStatus ]);

    const onHandleSubmit = ( e: SyntheticEvent ) => {
        e.preventDefault();
        console.log({formState});
        onResetForm();
    }

    const onGoogleSignIn = ( e: SyntheticEvent ) => {
        e.preventDefault();
        console.log({formState});
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
                    <div className="">
                        <input className="form-input" value={ formState.email } name="email" onChange={ onValueChange } type="email" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="">
                        <input className="form-input" value={ formState.password } name="password"  onChange={ onValueChange } type="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <div className="">
                        <button className="form-btn" onClick={ onHandleSubmit } disabled={ isAuthenticating }>Sign in</button>
                    </div>
                    <div className="">
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
