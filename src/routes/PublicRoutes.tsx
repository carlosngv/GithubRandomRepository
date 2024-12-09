import { useAppSelector } from "../store/hooks"
import { Navigate, Outlet } from "react-router";

export const PublicRoutes = ( ) => {

    const { authStatus } = useAppSelector( state => state.auth );

    return (         
        ( authStatus !== 'authenticated' )
        ? <Outlet />
        : <Navigate to="/repositories" />
    )
}

