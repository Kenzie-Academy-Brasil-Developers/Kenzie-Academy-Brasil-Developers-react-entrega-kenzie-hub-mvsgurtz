import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { DashboardPage } from "../../Pages/DashboardPage";
import { useState } from "react";
import { NotFound } from "../../Pages/NotFoundPage";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);

  const userRegister = () => {

  }
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage setUser={setUser} />}  />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
