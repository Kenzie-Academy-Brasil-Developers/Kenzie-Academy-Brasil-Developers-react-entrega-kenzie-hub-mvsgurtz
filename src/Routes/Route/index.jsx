import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { DashboardPage } from "../../Pages/DashboardPage";
import { NotFound } from "../../Pages/NotFoundPage";
import { PublicRoute } from "../PublicRoutes";
import { PrivateRoute } from "../PrivateRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Route>
      
      <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
