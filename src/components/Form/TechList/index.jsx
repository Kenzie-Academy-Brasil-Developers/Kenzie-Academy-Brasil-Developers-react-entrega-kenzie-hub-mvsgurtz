import style from "./style.module.scss";
import Edit from "../../../assets/Edit.svg";
import Delete from "../../../assets/Delete.svg";
import { useContext } from "react";
import { userContext } from "../../../provider/User";
import { EditModal } from "../EditModal";
import { TechContext } from "../../../provider/Tech";
export const TechList = () => {
  const { setIsVisibleEdit, isVisibleEdit } = useContext(userContext);

  const { techList, deleteTech } = useContext(TechContext);

  return (
    <>
      <div className={style.container}>
        <ul>
          {techList.map((tech) => (
            <li key={tech.title} className={style.content}>
              <h3>{tech.title}</h3>
              <div className={style.content__info}>
                <p>{tech.status}</p>
                <button>
                  <img
                    src={Edit}
                    alt=""
                    onClick={() => setIsVisibleEdit(true)}
                  />
                </button>
                <button onClick={() => deleteTech(tech.title)}>
                  <img src={Delete} alt="delete" />
                </button>
              </div>
            </li>
          ))}

        </ul>
      </div>
      {isVisibleEdit ? <EditModal /> : null}
    </>
  );
};
