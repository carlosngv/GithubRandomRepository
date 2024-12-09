import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "../../store/hooks";

const AuthLayout = () => {
    const { authStatus } = useAppSelector( state => state.auth );

    return (

        ( authStatus !== 'authenticated' )
        ? (
            <main className="auth-layout-container">
                <section className="auth-card">
                    <Outlet />
                </section>
            </main>
        )
        : ( <Navigate to="/repositories" replace /> )
    )
}

export default AuthLayout;
