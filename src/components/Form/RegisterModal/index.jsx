
import { useContext } from "react";
import { Modal } from "../Modal";
import { userContext } from "../../../provider/User";

export const RegisterModal = () => {
  const { setIsVisibleRegister } = useContext(userContext);

  return (
      <Modal h2={"Cadastrar Tecnologia"} Information={"Cadastrar Tecnologia"} register={setIsVisibleRegister}/>
  );
};
