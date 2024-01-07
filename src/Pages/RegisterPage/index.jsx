import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";


export const RegisterPage = () => {
  return (
    <>
      <main>
        <div className={style.header__register}>
          <img src={Logo} alt="logo" />
          <button>Voltar</button>
        </div>
        <div  className={style.register__container}>
          <h3>Crie sua Conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <div className={style.register__infos}>
            <label htmlFor="Name">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" />

            <label htmlFor="Email">Email</label>
            <input type="mail" placeholder="Digite aqui seu email"/>

            <label htmlFor="Password">Senha</label>
            <input type="password"placeholder="Digite aqui sua senha" />

            <label htmlFor="ConfirmPassword">Confirmar Senha</label>
            <input type="password" placeholder="Digite novamente sua senha"/>

            <label htmlFor="Bio">Bio</label>
            <input type="text" placeholder="Fale sobre você" />

            <label htmlFor="Contact">Contato</label>
            <input type="text" placeholder="Opção de contato"/>

            <label htmlFor="Selecionar Módulo"></label>
                <select>
                    <option value="">Primeiro Módulo</option>
                    <option value="">Segundo Módulo</option>
                    <option value="">Terceiro Módulo</option>
                </select>
            <button>Cadastrar</button>    
          </div>
        </div>
      </main>
    </>
  );
};
