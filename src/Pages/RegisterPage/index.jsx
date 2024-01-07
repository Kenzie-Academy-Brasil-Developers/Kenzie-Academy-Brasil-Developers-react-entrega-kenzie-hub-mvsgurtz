import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { useNavigate } from "react-router-dom";


export const RegisterPage = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  }
   
  return (
    <>
      <main>
        <div className={style.header__register}>
          <img src={Logo} alt="logo" />
          <button onClick={redirect}>Voltar</button>
        </div>
        <div  className={style.register__container}>
          <h3>Crie sua Conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <RegisterForm styleName = {style.register__infos}  />
        </div>
      </main>
    </>
  );
};
