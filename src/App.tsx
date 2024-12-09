import { Navigate, Route, Routes } from "react-router";
import { ErrorPage } from "./shared/pages/ErrorPage";
import AuthLayout from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import RepositoryLayout from "./repository/layout/RepositoryLayout";
import { PublicRoutes } from "./routes/PublicRoutes";


function App() {

  return (
    <Routes>

      <Route element={ <PublicRoutes /> }>
        <Route path="auth" element={ <AuthLayout /> }>
          <Route path="login" element={ <LoginPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="*" element={ <Navigate to="/auth/login" /> } />
        </Route>
      </Route>

      <Route element={ <ProtectedRoutes /> }>
        <Route path="respositories" element={ <RepositoryLayout /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Route>
    </Routes>
  )
}

export default App
