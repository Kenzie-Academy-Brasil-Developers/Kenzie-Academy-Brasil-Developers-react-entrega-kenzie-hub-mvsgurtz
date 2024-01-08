import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export const DashboardPage = ({user, userLogout}) => {
  return (
    <>
      <header>
        <div className={style.header__info}>
          <img src={Logo} alt="" />
          <button onClick={userLogout}>Sair</button>
        </div>
      </header>
      <div className={style.introduction__info}>
        <p className={style.info__person}> Olá, {user.name} </p>
        <p className={style.info__module}>{user.course_module}</p>
      </div>
      <main className={style.main__container}>
        <div className={style.main__content}>
          <h3>Que pena! Estamos em desenvolvimento :/ </h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </p>
        </div>
      </main>
    </>
  );
};
