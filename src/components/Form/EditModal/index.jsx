import { useContext } from "react";
import { Modal } from "../Modal";
import { userContext } from "../../../provider/User";

export const EditModal = () => {
  const { setIsVisibleEdit } = useContext(userContext);

  return (
      <Modal h2={"Tecnologia detalhes"} Information={"Salvar alterações"} register={setIsVisibleEdit}/>
  );
};
