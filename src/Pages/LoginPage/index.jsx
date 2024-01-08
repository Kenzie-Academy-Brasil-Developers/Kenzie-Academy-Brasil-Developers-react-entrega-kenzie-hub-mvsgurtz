import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";

export const LoginPage = ({setUser}) => {
  const navigate = useNavigate();

  const redirect = () =>{
    navigate("/Register");
  }

  return (
    <main className={style.login__main} >
      <img src={Logo} alt="Logo" />
      <div className={style.login__container}>
        <h3>Login</h3>
        <LoginForm styleName = {style.login__info} setUser={setUser}/>
        <div className={style.register__acess}>
          <p>Ainda nao possui uma conta?</p>
          <button className={style.register__btn} onClick={redirect}>Cadastre-se</button>
        </div>
      </div>
    </main>
  );
};
