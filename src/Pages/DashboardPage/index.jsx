import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext, useState } from "react";
import { userContext } from "../../provider/User";
import { TechList } from "../../components/Form/TechList";
import Add from "../../assets/Add.svg";
import { TechModal } from "../../components/Form/TechModal";

export const DashboardPage = ({}) => {
  const [User, setVerificationUser] = useState(localStorage.getItem("@Name"));
  const [Module, setVerificationModule] = useState(
    localStorage.getItem("@CourseModule")
  );
  const { userLogout, setIsVisibleRegister, isVisibleRegister, isVisibleEdit } = useContext(userContext);
  return (
    <>
      <header>
        <div className={style.header__info}>
          <img src={Logo} alt="" />
          <button onClick={userLogout}>Sair</button>
        </div>
      </header>
      <div className={style.introduction__info}>
        <p className={style.info__person}>Olá, {User}</p>
        <p className={style.info__module}>{Module}</p>
      </div>
      <main className={style.main__container}>
        <div className={style.main__content}>
          <h3>Tecnologias</h3>
          <button onClick={() => setIsVisibleRegister(true)}>
            <img src={Add} alt="buttonAdd" />
          </button>
        </div>
        <div className={style.content__info}>
          <TechList />
        </div>
        {isVisibleRegister ? (
          <TechModal />
        )  : null}
      </main>
    </>
  );
};
