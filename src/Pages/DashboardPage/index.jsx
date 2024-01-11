import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext, useState } from "react";
import { userContext } from "../../provider/User";

export const DashboardPage = ({ }) => {
  const [User, setVerificationUser] = useState(localStorage.getItem("@Name"));
  const [Module, setVerificationModule] = useState(
    localStorage.getItem("@CourseModule")
  );
    const {userLogout} = useContext(userContext);
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
