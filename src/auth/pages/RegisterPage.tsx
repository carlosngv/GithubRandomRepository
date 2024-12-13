import { SyntheticEvent, useEffect, useMemo } from "react";
import { useForm } from "../../shared/hooks/useForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { startEmailSignUp } from "../../store/auth/thunks";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

export const RegisterPage = () => {

    const { authStatus, errorMessage } = useAppSelector( state => state.auth );

    const isAuthenticating = useMemo(() => authStatus === 'validating', [ authStatus ]);

    const useDispatch = useAppDispatch();

    const { formState, onResetForm, onValueChange } = useForm<{ email: string, password: string }>({
        email: '',
        password: '',
    });

        useEffect(() => {
    
            if( errorMessage ) {
                Swal.fire({
                    title: 'Sign up was not possible!',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            }
          
        }, [ errorMessage ])

    const onHandleSubmit = ( e: SyntheticEvent ) => {
        e.preventDefault();
        useDispatch( startEmailSignUp( formState.email, formState.password ) );
        onResetForm();
    }


    return (
        <div className="login-card">
            <header>
                <h1 className="text-4xl font-extrabold text-gray-700">Welcome,</h1>
                <h3 className="text-2xl text-gray-500">Sign up if you're new!</h3>
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
                    <div className="">
                        <button className="form-btn" onClick={ onHandleSubmit } disabled={ isAuthenticating }>Sign up</button>
                    </div>
                </div>
            </form>
            <footer className="form-footer">
                <span className="text-lg font-medium">Already registered?</span> <NavLink to="/auth/login">Sign in</NavLink> 
            </footer>
       </div>
    )
}
