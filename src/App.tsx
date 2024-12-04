import { Navigate, Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import { ErrorPage } from "./shared/pages/ErrorPage";


function App() {

  return (
    <Routes>
      { routes.map( route => (
          <Route key={ route.path } path={ route.path } element={ <route.Component /> }></Route>
      ) ) }
      <Route path="*" element={ <ErrorPage /> } />
    </Routes>
  )
}

export default App
