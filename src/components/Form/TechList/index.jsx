import style from "./style.module.scss";
import Edit from "../../../assets/Edit.svg";
import Delete from "../../../assets/Delete.svg";
import { useContext } from "react";
import { userContext } from "../../../provider/User";
import { EditModal } from "../EditModal";
export const TechList = () => {
  const {setIsVisibleEdit, isVisibleEdit} = useContext(userContext);

  return (
    <>
    <div className={style.container__one}>
    <div className={style.container}>
        <div className={style.content}>
          <h3>React JS</h3>
          <div className={style.content__info}>
            <p>Avançado</p>
            <button><img src={Edit} alt="" onClick={() =>setIsVisibleEdit(true) } /></button>
            <button><img src={Delete} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
    {isVisibleEdit ? (
          <EditModal />
        )  : null}
    </>
  );
};
