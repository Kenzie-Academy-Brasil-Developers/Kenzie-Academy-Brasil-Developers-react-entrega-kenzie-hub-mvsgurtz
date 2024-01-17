import style from "./style.module.scss";
import Edit from "../../../assets/Edit.svg";
import Delete from "../../../assets/Delete.svg";
import { useContext } from "react";
import { userContext } from "../../../provider/User";
import { EditModal } from "../EditModal";
import { TechContext } from "../../../provider/Tech";
export const TechList = () => {
  const { techList, deleteTech, setEditingTech, editingTech } = useContext(TechContext);

  return (
    <>
      <div className={style.container}>
        <ul>
          {techList.map((tech) => (
            <li key={tech.id} className={style.content}>
              <h3>{tech.title}</h3>
              <div className={style.content__info}>
                <p>{tech.status}</p>
                <button>
                  <img
                    src={Edit}
                    alt=""
                    onClick={() => setEditingTech(tech)}
                   
                  />
                </button>
                <button onClick={() => deleteTech(tech.id)}>
                  <img src={Delete} alt="delete" />
                </button>
              </div>
            </li>
          ))}

        </ul>
      </div>
      {editingTech ? <EditModal /> : null}
    </>
  );
};
