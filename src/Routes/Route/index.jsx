import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { DashboardPage } from "../../Pages/DashboardPage";
import { useState } from "react";
import { NotFound } from "../../Pages/NotFoundPage";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null)
    navigate("/");
  }


  
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser}/>} />
      <Route path="/Register" element={<RegisterPage setUser={setUser} />}  />
      <Route path="/Dashboard" element={<DashboardPage userLogout={userLogout} user={user} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
