
// * Private route

import { Navigate, Routes } from "react-router";
import { Route } from "react-router";
import { RepositoryPage } from "../pages/RepositoryPage";
import { useAppSelector } from "../../store/hooks";

const RepositoryLayout = () => {

    const { authStatus } = useAppSelector( state => state.auth );
    return (
        authStatus === 'authenticated' ?
            (
                <>
                    <Routes>
                        <Route path="" element={ <RepositoryPage /> } />
                        <Route path="*" element={ <Navigate replace to="/repositories" />} />
                    </Routes>
                </>
            )

            : ( <Navigate to="/auth/login" replace /> )

    )
}

export default RepositoryLayout;
