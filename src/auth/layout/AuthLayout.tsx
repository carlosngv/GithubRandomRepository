import { Routes } from "react-router";

import { Navigate, Route } from 'react-router'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { useAppSelector } from "../../store/hooks";

const AuthLayout = () => {
    const { authStatus } = useAppSelector( state => state.auth );

    return (

        ( authStatus !== 'authenticated' )
        ?   (<>
                <h1>Auth Layout</h1>
                <Routes>
                    <Route path="login" element={ <LoginPage /> } />
                    <Route path="register" element={ <RegisterPage /> } />
                    <Route path="*" element={ <Navigate replace to="/auth/login" />} />
                </Routes>
            </>)
        : ( <Navigate to="/repositories" replace /> )
    )
}

export default AuthLayout;
