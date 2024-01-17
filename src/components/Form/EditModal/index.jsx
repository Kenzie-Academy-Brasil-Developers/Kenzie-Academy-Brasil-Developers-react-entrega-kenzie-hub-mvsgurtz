import { useContext } from "react";
import { Modal } from "../Modal";
import { userContext } from "../../../provider/User";
import { TechContext } from "../../../provider/Tech";

export const EditModal = () => {
  const { setEditingTech } = useContext(TechContext);

  return (
      <Modal h2={"Tecnologia detalhes"} Information={"Salvar alterações"} register={setEditingTech}/>
  );
};
