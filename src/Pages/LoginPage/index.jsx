import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export const LoginPage = () => {
  return (
    <main className={style.login__main} >
      <img src={Logo} alt="Logo" />
      <div className={style.login__container}>
        <h3>Login</h3>
        <div className={style.login__info}>
          <label htmlFor="Email">Email </label>
          <input type="text" placeholder="Digite seu Email" />
          <label htmlFor="Password">Senha </label>
          <input type="text" placeholder="Digite a sua Senha" />
          <button>Entrar</button>
        </div>
        <div className={style.register__acess}>
          <p>Ainda nao possui uma conta?</p>
          <button className={style.register__btn}>Cadastre-se</button>
        </div>
      </div>
    </main>
  );
};
