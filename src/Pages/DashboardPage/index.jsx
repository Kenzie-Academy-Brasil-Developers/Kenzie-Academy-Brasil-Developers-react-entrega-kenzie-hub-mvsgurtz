import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";

export const DashboardPage = ({ userLogout }) => {
  const [User, setVerificationUser] = useState(localStorage.getItem("@Name"));
  const [Module, setVerificationModule] = useState(
    localStorage.getItem("@CourseModule")
  );
  console.log(User);
  return (
    <>
      <header>
        <div className={style.header__info}>
          <img src={Logo} alt="" />
          <button onClick={userLogout}>Sair</button>
        </div>
      </header>
      <div className={style.introduction__info}>
        <p className={style.info__person}>
          Olá, {User}
        </p>
        <p className={style.info__module}>
          {Module}
        </p>
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
