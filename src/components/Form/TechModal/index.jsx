
import { useContext } from "react";
import { Modal } from "../Modal";
import { userContext } from "../../../provider/User";

export const TechModal = () => {
  const { setIsVisibleRegister } = useContext(userContext);

  return (
      <Modal h2={"Cadastrar Tecnologia"} Information={"Cadastrar Tecnologia"} register={setIsVisibleRegister}/>
  );
};
